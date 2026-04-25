"use client";

import { FormEvent, useState } from "react";
import {
  Button,
  cn,
  Input,
  Label,
  SelectField,
  Textarea,
  toast,
} from "@ideal/ui";
import { darkFormField, darkFormLabel, darkFormMuted } from "@/lib/dark-form-ui";
import { RASTREAMENTO_WHATSAPP_PARAM } from "@/content/hub";
import { buildWhatsAppUrl } from "@/lib/site-config";

const INTERESSE = [
  { value: "Particular (cotação)", label: "Veículo particular" },
  { value: "Frota (cotação)", label: "Frota / empresa" },
  { value: "Outro", label: "Outro assunto" },
] as const;

export function RastreamentoLeadForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const msg = `Olá! Ideal Rastreamento — cotação pelo site

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Interesse:* ${data.interesse}
${data.mensagem?.trim() ? `\n*Mensagem:* ${data.mensagem.trim()}` : ""}`;

    const url = buildWhatsAppUrl({ phone: RASTREAMENTO_WHATSAPP_PARAM, message: msg });
    window.open(url, "_blank");
    e.currentTarget.reset();
    setSending(false);
    toast.info("Abrindo o WhatsApp…");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="ra-nome" className={cn("mb-1 block", darkFormLabel)} required>
          Nome
        </Label>
        <Input
          id="ra-nome"
          name="nome"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="ra-tel" className={cn("mb-1 block", darkFormLabel)} required>
          Telefone
        </Label>
        <Input
          id="ra-tel"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="ra-email" className={cn("mb-1 block", darkFormLabel)} required>
          E-mail
        </Label>
        <Input
          id="ra-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="ra-int" className={cn("mb-1 block", darkFormLabel)} required>
          Interesse
        </Label>
        <SelectField
          id="ra-int"
          name="interesse"
          required
          defaultValue=""
          className={darkFormField}
        >
          <option value="" disabled>
            Selecione
          </option>
          {INTERESSE.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </SelectField>
      </div>
      <div>
        <Label htmlFor="ra-msg" className={cn("mb-1 block", darkFormLabel)}>
          Mensagem (opcional)
        </Label>
        <Textarea
          id="ra-msg"
          name="mensagem"
          rows={3}
          placeholder="Cidade, quantidade de veículos, tipo de frota…"
          className={darkFormField}
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl py-3 text-sm font-semibold shadow-lg shadow-amber-900/20"
        disabled={sending}
      >
        Enviar e falar no WhatsApp
      </Button>
      <p className={cn("text-center text-xs", darkFormMuted)}>
        Enviaremos a mensagem com seus dados no WhatsApp da Ideal Rastreamento.
      </p>
    </form>
  );
}
