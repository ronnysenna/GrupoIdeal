import { describe, expect, it } from "vitest";
import { cadastroBodySchema } from "./cadastro";

const base = {
  nome: "FULANO DA SILVA",
  email: "fulano@example.com",
  cpf: "111.444.777-35",
  rg: "1234567",
  fone1: "(85) 99999-9999",
  fone2: "",
  nasc: "1990-05-15",
  plano_sede: "100MB",
  venc: "10",
  cep: "60130-100",
  endereco: "Rua Teste",
  bairro: "Centro",
  obs: "",
  website: "",
  date_cadas: "24/04/2026",
};

describe("cadastroBodySchema", () => {
  it("aceita payload válido", () => {
    const r = cadastroBodySchema.safeParse(base);
    expect(r.success).toBe(true);
  });

  it("rejeita CPF inválido", () => {
    const r = cadastroBodySchema.safeParse({ ...base, cpf: "111.111.111-11" });
    expect(r.success).toBe(false);
  });

  it("rejeita e-mail inválido", () => {
    const r = cadastroBodySchema.safeParse({ ...base, email: "não-é-email" });
    expect(r.success).toBe(false);
  });
});
