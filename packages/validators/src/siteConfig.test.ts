import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { siteConfigSchema } from "./siteConfig";

// src/ → 3x .. = raiz do monorepo
const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const path = join(repoRoot, "sites.config.json");

describe("siteConfigSchema", () => {
  it("aceita o sites.config.json real do repositório", () => {
    const raw = JSON.parse(readFileSync(path, "utf-8")) as unknown;
    const r = siteConfigSchema.safeParse(raw);
    expect(r.success, r.error?.format()).toBe(true);
  });
});
