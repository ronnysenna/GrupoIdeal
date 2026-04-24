import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { cadastroRateLimitConfig } from "./rate-limit";

let ratelimit: Ratelimit | null = null;
let upstashNotConfigured: boolean | null = null;

function getRatelimit(): Ratelimit | null {
  if (upstashNotConfigured === true) return null;
  if (ratelimit) return ratelimit;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    upstashNotConfigured = true;
    return null;
  }
  upstashNotConfigured = false;
  const redis = new Redis({ url, token });
  const cfg = cadastroRateLimitConfig();
  const windowSec = Math.max(60, Math.round(cfg.windowMs / 1000));
  const max = Math.max(1, cfg.max);
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(max, `${windowSec} s`),
    prefix: "cadastro",
  });
  return ratelimit;
}

/**
 * Se Upstash estiver configurado, aplica limite remoto. Caso contrário, devolve `null`
 * (o chamador continua com o limite in-memory em `checkRateLimit`).
 */
export async function upstashRatelimitCadastro(
  key: string,
): Promise<{ used: "upstash"; ok: true } | { used: "upstash"; ok: false; retryAfterSec: number } | { used: "none" }> {
  if (process.env.RATE_LIMIT_DISABLED === "1" || process.env.RATE_LIMIT_DISABLED === "true") {
    return { used: "none" };
  }
  const r = getRatelimit();
  if (!r) {
    return { used: "none" };
  }
  const { success, reset } = await r.limit(key);
  if (success) {
    return { used: "upstash", ok: true };
  }
  const retryAfterMs = Math.max(0, reset - Date.now());
  return {
    used: "upstash",
    ok: false,
    retryAfterSec: Math.max(1, Math.ceil(retryAfterMs / 1000)),
  };
}
