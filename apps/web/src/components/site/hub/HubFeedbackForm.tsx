"use client";

import { useState, type FormEvent } from "react";
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
import { HUB_PHONE_WA } from "@/content/hub";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { StarIcon } from "./icons";

const MAX_RATING = 5;

export function HubFeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Escolha uma nota de 1 a 5 antes de enviar.");
      return;
    }

    setSending(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const empresa = data.empresa || "Não informado";
    const nome = data.nome?.trim() || "Anônimo";
    const email = data.email?.trim() || "—";

    const msg = `Olá! Tenho um feedback para o Grupo Ideal.

*Empresa avaliada:* ${empresa}
*Nota:* ${rating} de ${MAX_RATING}
*Nome:* ${nome}
*E-mail:* ${email}

*Comentário:*
${data.comentario}`;

    const url = buildWhatsAppUrl({ phone: HUB_PHONE_WA, message: msg });
    window.open(url, "_blank");
    e.currentTarget.reset();
    setRating(0);
    setSending(false);
    toast.info("Abrindo o WhatsApp para registrar seu feedback…");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fb-empresa" className={cn("mb-1 block", darkFormLabel)} required>
          Sobre qual empresa?
        </Label>
        <SelectField
          id="fb-empresa"
          name="empresa"
          required
          defaultValue=""
          className={darkFormField}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Grupo Ideal (geral)">Grupo Ideal (geral)</option>
          <option value="Ideal Net">Ideal Net</option>
          <option value="Teralink Fibra">Teralink Fibra</option>
          <option value="Ideal Rastreamento">Ideal Rastreamento</option>
          <option value="Ideal Soluções Digitais">Ideal Soluções Digitais</option>
        </SelectField>
      </div>

      <div>
        <Label className={cn("mb-2 block", darkFormLabel)} required>
          Sua nota
        </Label>
        <div
          className="flex items-center gap-1"
          role="radiogroup"
          aria-label="Avaliação de 1 a 5"
        >
          {Array.from({ length: MAX_RATING }).map((_, i) => {
            const value = i + 1;
            const active = (hover || rating) >= value;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={rating === value}
                aria-label={`${value} ${value === 1 ? "estrela" : "estrelas"}`}
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(0)}
                onFocus={() => setHover(value)}
                onBlur={() => setHover(0)}
                onClick={() => setRating(value)}
                className="rounded p-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
              >
                <StarIcon
                  className={[
                    "h-6 w-6 transition-colors",
                    active ? "text-amber-400" : "text-zinc-500",
                  ].join(" ")}
                  fill={active ? "currentColor" : "none"}
                />
              </button>
            );
          })}
          <span className={cn("ml-2 text-xs", darkFormMuted)}>
            {rating > 0 ? `${rating} de ${MAX_RATING}` : "Sem nota"}
          </span>
        </div>
      </div>

      <div>
        <Label htmlFor="fb-comentario" className={cn("mb-1 block", darkFormLabel)} required>
          Seu comentário
        </Label>
        <Textarea
          id="fb-comentario"
          name="comentario"
          rows={4}
          required
          placeholder="Conte como foi a sua experiência. Sugestões e críticas também são bem-vindas."
          className={darkFormField}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="fb-nome" className={cn("mb-1 block", darkFormLabel)}>
            Nome (opcional)
          </Label>
          <Input
            id="fb-nome"
            name="nome"
            placeholder="Como podemos te chamar?"
            className={darkFormField}
          />
        </div>
        <div>
          <Label htmlFor="fb-email" className={cn("mb-1 block", darkFormLabel)}>
            E-mail (opcional)
          </Label>
          <Input
            id="fb-email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            className={darkFormField}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl py-3 text-sm font-semibold shadow-lg shadow-blue-900/30"
        disabled={sending}
      >
        Enviar feedback
      </Button>
      <p className={cn("text-center text-xs", darkFormMuted)}>
        Você será redirecionado ao WhatsApp para concluir o envio.
      </p>
    </form>
  );
}
