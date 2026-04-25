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
import type { CityPlans } from "@/content/idealnet";
import { darkFormField, darkFormLabel, darkFormMuted } from "@/lib/dark-form-ui";
import { buildWhatsAppUrl } from "@/lib/site-config";

type Props = {
  cityTitle: string;
  whatsappPhoneParam: string;
  plans: CityPlans;
};

function planOptions(plans: CityPlans): { value: string; label: string }[] {
  const out: { value: string; label: string }[] = [];
  for (const p of plans.fibra) {
    out.push({ value: `Fibra ${p.name}`, label: `Fibra — ${p.name} (R$ ${p.price})` });
  }
  for (const p of plans.radio) {
    out.push({ value: `Rádio ${p.name}`, label: `Rádio — ${p.name} (R$ ${p.price})` });
  }
  for (const p of plans.empresarial) {
    out.push({
      value: `Empresarial — ${p.name}`,
      label: `Empresarial — ${p.name} (consultar)`,
    });
  }
  return out;
}

export function IdealNetLeadForm({ cityTitle, whatsappPhoneParam, plans }: Props) {
  const [sending, setSending] = useState(false);
  const opts = planOptions(plans);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const msg = `Olá! Ideal Net — ${cityTitle}

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Plano:* ${data.plano}
${data.mensagem ? `\n*Mensagem:* ${data.mensagem}` : ""}`;

    const url = buildWhatsAppUrl({ phone: whatsappPhoneParam, message: msg });
    window.open(url, "_blank");
    e.currentTarget.reset();
    setSending(false);
    toast.info("Abrindo o WhatsApp…");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="in-nome" className={cn("mb-1 block", darkFormLabel)} required>
          Nome
        </Label>
        <Input
          id="in-nome"
          name="nome"
          required
          placeholder="Seu nome"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="in-tel" className={cn("mb-1 block", darkFormLabel)} required>
          Telefone
        </Label>
        <Input
          id="in-tel"
          name="telefone"
          type="tel"
          required
          placeholder="(00) 00000-0000"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="in-email" className={cn("mb-1 block", darkFormLabel)} required>
          E-mail
        </Label>
        <Input
          id="in-email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className={darkFormField}
        />
      </div>
      <div>
        <Label htmlFor="in-plano" className={cn("mb-1 block", darkFormLabel)} required>
          Plano
        </Label>
        <SelectField id="in-plano" name="plano" required defaultValue="" className={darkFormField}>
          <option value="" disabled>
            Escolha um plano
          </option>
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </SelectField>
      </div>
      <div>
        <Label htmlFor="in-msg" className={cn("mb-1 block", darkFormLabel)}>
          Mensagem (opcional)
        </Label>
        <Textarea
          id="in-msg"
          name="mensagem"
          rows={3}
          placeholder="Dúvidas ou endereço para análise"
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
      <p className={cn("text-center text-xs", darkFormMuted)}>Você será redirecionado ao WhatsApp.</p>
    </form>
  );
}
