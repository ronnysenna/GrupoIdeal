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
import { IDEAL_SOLUCOES_DIGITAIS_CONTACT } from "@/content/solucoes-digitais";
import { darkFormField, darkFormLabel, darkFormMuted } from "@/lib/dark-form-ui";
import { buildWhatsAppUrl } from "@/lib/site-config";

const TIPO = [
  { value: "Site / landing", label: "Site ou landing page" },
  { value: "Sistema web / API", label: "Sistema web ou API" },
  { value: "Agente / automação com IA", label: "Agente ou automação com IA" },
  { value: "Integração de dados", label: "Integração de sistemas e dados" },
  { value: "Outro", label: "Outro assunto" },
] as const;

export function SolucoesDigitaisLeadForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const msg = `Olá! Ideal Soluções Digitais — contato pelo site

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Tipo de projeto:* ${data.tipo}
${data.mensagem?.trim() ? `\n*Mensagem:* ${data.mensagem.trim()}` : ""}`;

    const url = buildWhatsAppUrl({
      phone: IDEAL_SOLUCOES_DIGITAIS_CONTACT.whatsappPhoneParam,
      message: msg,
    });
    window.open(url, "_blank");
    e.currentTarget.reset();
    setSending(false);
    toast.info("Abrindo o WhatsApp…");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="sd-nome" className={cn("mb-1 block", darkFormLabel)} required>
          Nome
        </Label>
        <Input
          id="sd-nome"
          name="nome"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="sd-email" className={cn("mb-1 block", darkFormLabel)} required>
          E-mail
        </Label>
        <Input
          id="sd-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="sd-tel" className={cn("mb-1 block", darkFormLabel)} required>
          Telefone / WhatsApp
        </Label>
        <Input
          id="sd-tel"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(85) 9 9999-9999"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="sd-tipo" className={cn("mb-1 block", darkFormLabel)} required>
          Tipo de projeto
        </Label>
        <SelectField
          id="sd-tipo"
          name="tipo"
          required
          defaultValue=""
          className={darkFormField}
        >
          <option value="" disabled>
            Selecione
          </option>
          {TIPO.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </SelectField>
      </div>
      <div>
        <Label htmlFor="sd-msg" className={cn("mb-1 block", darkFormLabel)}>
          Mensagem
        </Label>
        <Textarea
          id="sd-msg"
          name="mensagem"
          rows={4}
          placeholder="Conte prazo, escopo aproximado, links de referência…"
          className={darkFormField}
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl py-3 text-sm font-semibold shadow-lg shadow-violet-900/30"
        disabled={sending}
      >
        Enviar e abrir WhatsApp
      </Button>
      <p className={cn("text-center text-xs", darkFormMuted)}>
        A mensagem será enviada ao WhatsApp {IDEAL_SOLUCOES_DIGITAIS_CONTACT.whatsappDisplay} com
        cópia dos dados.
      </p>
    </form>
  );
}
