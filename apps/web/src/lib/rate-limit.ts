/**
 * Rate limit in-memory (por instância Node). Em várias réplicas do app, cada uma
 * tem o seu contador — para limite global use Redis/Upstash em produção.
 */

type Bucket = { count: number; windowStart: number };

const store = new Map<string, Bucket>();

const MAX_ENTRIES = 10_000;

function pruneIfNeeded() {
  if (store.size <= MAX_ENTRIES) return;
  const keys = [...store.keys()].slice(0, Math.floor(MAX_ENTRIES / 2));
  for (const k of keys) store.delete(k);
}

export type RateLimitResult = { ok: true } | { ok: false; retryAfterSec: number };

export function checkRateLimit(
  key: string,
  max: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const b = store.get(key);
  if (!b || now - b.windowStart >= windowMs) {
    store.set(key, { count: 1, windowStart: now });
    pruneIfNeeded();
    return { ok: true };
  }
  if (b.count < max) {
    b.count += 1;
    return { ok: true };
  }
  const retryAfterMs = windowMs - (now - b.windowStart);
  return {
    ok: false,
    retryAfterSec: Math.max(1, Math.ceil(retryAfterMs / 1000)),
  };
}

export function getClientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) {
    const first = xf.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export function cadastroRateLimitConfig(): {
  enabled: boolean;
  max: number;
  windowMs: number;
} {
  if (process.env.RATE_LIMIT_DISABLED === "1" || process.env.RATE_LIMIT_DISABLED === "true") {
    return { enabled: false, max: 0, windowMs: 0 };
  }
  const max = Math.max(1, parseInt(process.env.RATE_LIMIT_CADASTRO_MAX ?? "8", 10) || 8);
  const windowMs = Math.max(
    1000,
    parseInt(process.env.RATE_LIMIT_CADASTRO_WINDOW_MS ?? "60000", 10) || 60_000,
  );
  return { enabled: true, max, windowMs };
}
