import { describe, expect, it } from "vitest";
import { maskCep, maskCpf, maskPhone, onlyDigits } from "./masks";

describe("onlyDigits", () => {
  it("remove tudo exceto 0-9", () => {
    expect(onlyDigits("a1b2-3_4")).toBe("1234");
  });
});

describe("maskCpf", () => {
  it("formata 11 dígitos", () => {
    expect(maskCpf("11144477735")).toBe("111.444.777-35");
  });
  it("limita a 11 dígitos de entrada", () => {
    expect(maskCpf("111.444.777-35 extra")).toBe("111.444.777-35");
  });
});

describe("maskCep", () => {
  it("formata 8 dígitos", () => {
    expect(maskCep("60130100")).toBe("60130-100");
  });
});

describe("maskPhone", () => {
  it("formata 11 dígitos (móvel)", () => {
    expect(maskPhone("85988887777")).toBe("(85) 98888-7777");
  });
  it("formata 10 dígitos (fixo)", () => {
    expect(maskPhone("8532345678")).toBe("(85) 3234-5678");
  });
});
