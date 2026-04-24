/**
 * O output `standalone` do Next não inclui `public` nem `.next/static` ao lado de `server.js`.
 * Isto alinha o ambiente local/CI (Playwright) com o Dockerfile (cópias explícitas).
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const webRoot = join(__dirname, "..");
const standalone = join(webRoot, ".next/standalone/apps/web");

if (!existsSync(standalone)) {
  console.error("[sync-standalone-assets] Falta .next/standalone. Execute antes: pnpm --filter web build");
  process.exit(1);
}

const pub = join(webRoot, "public");
if (existsSync(pub)) {
  cpSync(pub, join(standalone, "public"), { recursive: true, force: true });
}

const staticFrom = join(webRoot, ".next/static");
if (existsSync(staticFrom)) {
  mkdirSync(join(standalone, ".next"), { recursive: true });
  cpSync(staticFrom, join(standalone, ".next/static"), { recursive: true, force: true });
}
