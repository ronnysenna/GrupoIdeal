import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("home and cadastro pages render", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.goto("/teralink/cadastro");
    await expect(page.getByRole("button", { name: /finalizar cadastro/i })).toBeVisible();
    await expect(page.getByLabel(/nome completo/i)).toBeVisible();

    await page.goto("/palmacia/cadastro");
    await expect(page.getByRole("button", { name: /finalizar cadastro/i })).toBeVisible();

    const health = await page.request.get("/api/health");
    expect(health.ok()).toBeTruthy();
    await expect(health.json()).resolves.toMatchObject({ ok: true, service: "grupoideal-web" });
  });
});
