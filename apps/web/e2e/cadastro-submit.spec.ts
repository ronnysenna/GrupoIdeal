import { test, expect } from "@playwright/test";

test.describe("cadastro — envio com API mock", () => {
  test("preenche /palmacia/cadastro, envia e mostra sucesso", async ({ page }) => {
    type Posted = Record<string, unknown> | null;
    let posted: Posted = null;

    await page.route("**/api/cep/**", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ logradouro: "Rua das Flores", bairro: "Aldeota" }),
      });
    });

    await page.route("**/api/cadastro/palmacia", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }
      const raw = route.request().postData();
      posted = raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, message: "OK" }),
      });
    });

    await page.goto("/palmacia/cadastro");

    await page.getByLabel(/nome completo/i).fill("Fulano da Silva E2E");
    await page.getByLabel(/e-mail/i).fill("e2e@example.com");
    await page.getByLabel(/cpf/i).fill("111.444.777-35");
    await page.getByLabel(/^rg$/i).fill("1234567");
    await page.getByLabel(/^telefone$/i).fill("(85) 98888-7777");
    await page.getByLabel(/nascimento/i).fill("1990-05-15");
    await page.locator("#cad-plano").selectOption("100MB");
    await page.locator("#cad-venc").selectOption("10");
    await page.getByLabel(/^cep$/i).fill("60130-100");
    await page.getByLabel(/^cep$/i).blur();
    await expect(page.locator("#cad-endereco")).toHaveValue(/Rua/);
    await page.locator("#cad-endereco").fill("Rua das Flores, 100");
    await page.locator("#cad-bairro").fill("Aldeota");
    await page.getByLabel(/ponto de referência/i).fill("Próx. ao teste e2e");

    await page.getByRole("button", { name: /finalizar cadastro/i }).click();

    await expect(page.getByText(/cadastro enviado com sucesso/i)).toBeVisible();

    expect(posted).toBeTruthy();
    expect(posted).toMatchObject({
      nome: "Fulano da Silva E2E",
      email: "e2e@example.com",
      plano_sede: "100MB",
      venc: "10",
      rg: "1234567",
      endereco: "Rua das Flores, 100",
      bairro: "Aldeota",
    });
    const cepDigits = String(posted?.cep ?? "").replace(/\D/g, "");
    expect(cepDigits).toBe("60130100");
    const cpfDigits = String(posted?.cpf ?? "").replace(/\D/g, "");
    expect(cpfDigits).toBe("11144477735");
  });
});
