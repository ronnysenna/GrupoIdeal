import { test, expect } from "@playwright/test";
import { randomValidCpfFormatted } from "./helpers/cpf";

const run = process.env.E2E_INTEGRATION === "1";
const d = run ? test.describe : test.describe.skip;

d("cadastro — integração (Postgres, POST real)", () => {
  test("grava em DB e exibe sucesso (CEP ainda mockado)", async ({ page }) => {
    await page.route("**/api/cep/**", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ logradouro: "Rua E2E Integrado", bairro: "Bairro Teste" }),
      });
    });

    const cpf = randomValidCpfFormatted();
    const unique = `e2e-${Date.now()}`;

    await page.goto("/palmacia/cadastro");

    await page.getByLabel(/nome completo/i).fill(`Usuário ${unique}`);
    await page.getByLabel(/e-mail/i).fill(`${unique}@example.com`);
    await page.getByLabel(/cpf/i).fill(cpf);
    await page.getByLabel(/^rg$/i).fill("1234567");
    await page.getByLabel(/^telefone$/i).fill("(85) 97777-6666");
    await page.getByLabel(/nascimento/i).fill("1992-08-20");
    await page.locator("#cad-plano").selectOption("100MB");
    await page.locator("#cad-venc").selectOption("10");
    await page.getByLabel(/^cep$/i).fill("60130-100");
    await page.getByLabel(/^cep$/i).blur();
    await expect(page.locator("#cad-endereco")).toHaveValue(/E2E|Rua/);
    await page.locator("#cad-endereco").fill("Rua E2E Integrado, 200");
    await page.locator("#cad-bairro").fill("Bairro Teste");

    const resPromise = page.waitForResponse(
      (r) => r.request().method() === "POST" && r.url().includes("/api/cadastro/palmacia"),
    );

    await page.getByRole("button", { name: /finalizar cadastro/i }).click();

    const res = await resPromise;
    expect(res.ok(), await res.text()).toBeTruthy();
    await expect(res.json()).resolves.toMatchObject({ success: true });

    await expect(page.getByText(/cadastro enviado com sucesso/i)).toBeVisible();
  });
});
