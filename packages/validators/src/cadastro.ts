import { z } from "zod";

export const citySchema = z.enum([
  "TERALINK",
  "PALMACIA",
  "PACOTI",
  "IBICUITINGA",
]);

const cpfDigits = (v: string) => v.replace(/\D/g, "");

const isValidCpf = (raw: string): boolean => {
  const cpf = cpfDigits(raw);
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  for (let t = 9; t < 11; t += 1) {
    let d = 0;
    for (let c = 0; c < t; c += 1) {
      d += parseInt(cpf[c]!, 10) * (t + 1 - c);
    }
    d = ((10 * d) % 11) % 10;
    if (parseInt(cpf[t]!, 10) !== d) return false;
  }
  return true;
};

const optionalPhone = z
  .string()
  .optional()
  .or(z.literal(""))
  .refine(
    (v) => {
      if (v === undefined || v === "") return true;
      const d = v.replace(/\D/g, "");
      return d.length >= 10 && d.length <= 11;
    },
    { message: "Telefone inválido" },
  );

export const cadastroBodySchema = z
  .object({
    website: z.string().optional(),
    date_cadas: z.string().optional(),
    nome: z.string().min(3, "Informe o nome completo"),
    email: z.string().email("E-mail inválido"),
    cpf: z
      .string()
      .min(11, "CPF inválido")
      .refine((v) => isValidCpf(v), { message: "CPF inválido" }),
    rg: z.string().min(1, "RG é obrigatório"),
    fone1: z
      .string()
      .min(1, "Telefone é obrigatório")
      .refine(
        (v) => {
          const d = v.replace(/\D/g, "");
          return d.length >= 10 && d.length <= 11;
        },
        { message: "Telefone inválido" },
      ),
    fone2: optionalPhone,
    nasc: z.string().min(1, "Data de nascimento é obrigatória"),
    plano_sede: z.string().min(1, "Selecione um plano"),
    venc: z.string().min(1, "Selecione o vencimento"),
    cep: z
      .string()
      .min(1, "CEP é obrigatório")
      .refine(
        (v) => v.replace(/\D/g, "").length === 8,
        { message: "CEP inválido" },
      ),
    endereco: z.string().min(1, "Endereço é obrigatório"),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    obs: z.string().optional().or(z.literal("")),
  })
  .strict();

export type CadastroBody = z.infer<typeof cadastroBodySchema>;
