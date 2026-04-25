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
import { TERALINK_LEAD_PLAN_OPTIONS } from "@/content/teralink";
import { darkFormField, darkFormLabel, darkFormMuted } from "@/lib/dark-form-ui";
import { buildWhatsAppUrl } from "@/lib/site-config";

type Props = {
  whatsappPhoneParam: string;
};

export function TeralinkLeadForm({ whatsappPhoneParam }: Props) {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const endereco = data.endereco?.trim();
    const msg = `Olá! Teralink Fibra — Fortaleza

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Plano:* ${data.plano}
${endereco ? `*Endereço:* ${endereco}` : ""}
${data.mensagem?.trim() ? `\n*Mensagem:* ${data.mensagem.trim()}` : ""}`;

    const url = buildWhatsAppUrl({ phone: whatsappPhoneParam, message: msg });
    window.open(url, "_blank");
    e.currentTarget.reset();
    setSending(false);
    toast.info("Abrindo o WhatsApp…");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="tl-nome" className={cn("mb-1 block", darkFormLabel)} required>
          Nome
        </Label>
        <Input
          id="tl-nome"
          name="nome"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="tl-tel" className={cn("mb-1 block", darkFormLabel)} required>
          Telefone
        </Label>
        <Input
          id="tl-tel"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="tl-email" className={cn("mb-1 block", darkFormLabel)} required>
          E-mail
        </Label>
        <Input
          id="tl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="tl-plano" className={cn("mb-1 block", darkFormLabel)} required>
          Plano
        </Label>
        <SelectField
          id="tl-plano"
          name="plano"
          required
          defaultValue=""
          className={darkFormField}
        >
          <option value="" disabled>
            Escolha um plano
          </option>
          {TERALINK_LEAD_PLAN_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </SelectField>
      </div>
      <div>
        <Label htmlFor="tl-end" className={cn("mb-1 block", darkFormLabel)}>
          Endereço (opcional)
        </Label>
        <Input
          id="tl-end"
          name="endereco"
          autoComplete="street-address"
          placeholder="Bairro e referência"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="tl-msg" className={cn("mb-1 block", darkFormLabel)}>
          Mensagem (opcional)
        </Label>
        <Textarea
          id="tl-msg"
          name="mensagem"
          rows={3}
          placeholder="Dúvidas ou observações"
          className={darkFormField}
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl py-3 text-sm font-semibold shadow-lg shadow-blue-900/30"
        disabled={sending}
      >
        Enviar solicitação
      </Button>
      <p className={cn("text-center text-xs", darkFormMuted)}>
        Você será redirecionado ao WhatsApp.
      </p>
    </form>
  );
}
