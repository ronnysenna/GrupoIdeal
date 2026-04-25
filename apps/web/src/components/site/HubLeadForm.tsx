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

const WA = "5585991904540";

export function HubLeadForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const msg = `Olá! Vim pelo site.

*Nome:* ${data.nome}
*E-mail:* ${data.email}
*Telefone:* ${data.telefone}
*Serviço:* ${data.servico}
${data.mensagem ? `\n*Mensagem:* ${data.mensagem}` : ""}`;
    const url = `https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    e.currentTarget.reset();
    setSending(false);
    toast.info("Abrindo o WhatsApp…");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="hub-nome" className={cn("mb-1 block", darkFormLabel)} required>
          Nome completo
        </Label>
        <Input
          id="hub-nome"
          name="nome"
          required
          placeholder="Seu nome"
          className={darkFormField}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="hub-email" className={cn("mb-1 block", darkFormLabel)} required>
            E-mail
          </Label>
          <Input
            id="hub-email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className={darkFormField}
          />
        </div>
        <div>
          <Label htmlFor="hub-telefone" className={cn("mb-1 block", darkFormLabel)} required>
            Telefone
          </Label>
          <Input
            id="hub-telefone"
            name="telefone"
            required
            placeholder="(85) 9 9999-9999"
            className={darkFormField}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="hub-servico" className={cn("mb-1 block", darkFormLabel)} required>
          Serviço de interesse
        </Label>
        <SelectField
          id="hub-servico"
          name="servico"
          required
          defaultValue=""
          className={darkFormField}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="internet">Internet de alta velocidade</option>
          <option value="teralink">Teralink Fibra (Fortaleza)</option>
          <option value="desenvolvimento">Desenvolvimento e IA</option>
          <option value="rastreamento">Rastreamento veicular</option>
          <option value="outro">Outro</option>
        </SelectField>
      </div>
      <div>
        <Label htmlFor="hub-mensagem" className={cn("mb-1 block", darkFormLabel)}>
          Mensagem (opcional)
        </Label>
        <Textarea id="hub-mensagem" name="mensagem" rows={3} className={darkFormField} />
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
