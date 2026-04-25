"use client";

import { useState } from "react";
import {
  HUB_EMAIL,
  HUB_PHONE_DISPLAY,
  HUB_PHONE_TEL,
  HUB_PHONE_WA,
} from "@/content/hub";
import { buildWhatsAppUrl, telHref } from "@/lib/site-config";
import { HubLeadForm } from "@/components/site/HubLeadForm";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { HubFeedbackForm } from "./HubFeedbackForm";
import { Reveal } from "./Reveal";

type Tab = "contato" | "feedback";

export function ContactSection() {
  const [tab, setTab] = useState<Tab>("contato");

  const whatsHref = buildWhatsAppUrl({
    phone: HUB_PHONE_WA,
    message: "Olá! Vim pelo site do Grupo Ideal e gostaria de conversar.",
  });

  return (
    <section
      id="contato"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="contato-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.02] p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Fale com a gente
              </p>
              <h2
                id="contato-titulo"
                className="mt-3 text-3xl font-bold text-white sm:text-4xl"
              >
                Pronto para começar? A gente te ajuda.
              </h2>
              <p className="mt-3 max-w-md text-zinc-400">
                Escolha o canal que preferir. Respondemos rápido — em horário
                comercial e também via WhatsApp 24/7 para urgências.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href={whatsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-400/40 hover:bg-emerald-500/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-white">
                      WhatsApp
                    </span>
                    <span className="block text-xs text-zinc-400">
                      Resposta rápida — chame agora
                    </span>
                  </span>
                  <span className="text-sm font-medium text-emerald-300">
                    {HUB_PHONE_DISPLAY}
                  </span>
                </a>

                <a
                  href={telHref(HUB_PHONE_TEL)}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-400/40 hover:bg-blue-500/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-white">
                      Telefone
                    </span>
                    <span className="block text-xs text-zinc-400">
                      Atendimento comercial
                    </span>
                  </span>
                  <span className="text-sm font-medium text-blue-300">
                    {HUB_PHONE_DISPLAY}
                  </span>
                </a>

                <a
                  href={`mailto:${HUB_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-400/40 hover:bg-violet-500/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-white">
                      E-mail
                    </span>
                    <span className="block text-xs text-zinc-400">
                      Para propostas e suporte
                    </span>
                  </span>
                  <span className="hidden truncate text-sm font-medium text-violet-300 sm:inline">
                    {HUB_EMAIL}
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-100 ring-1 ring-white/5 sm:p-7">
              <div
                role="tablist"
                aria-label="Tipo de mensagem"
                className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] p-1 text-sm font-medium"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "contato"}
                  onClick={() => setTab("contato")}
                  className={[
                    "rounded-full px-4 py-2 transition",
                    tab === "contato"
                      ? "bg-white/15 text-white shadow-sm ring-1 ring-white/10"
                      : "text-zinc-400 hover:text-zinc-200",
                  ].join(" ")}
                >
                  Contato
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "feedback"}
                  onClick={() => setTab("feedback")}
                  className={[
                    "rounded-full px-4 py-2 transition",
                    tab === "feedback"
                      ? "bg-white/15 text-white shadow-sm ring-1 ring-white/10"
                      : "text-zinc-400 hover:text-zinc-200",
                  ].join(" ")}
                >
                  Feedback
                </button>
              </div>

              {tab === "contato" ? (
                <div role="tabpanel">
                  <h3 className="text-lg font-semibold text-white">
                    Solicite um orçamento
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Conte um pouco do que você precisa e retornamos em breve.
                  </p>
                  <div className="mt-4">
                    <HubLeadForm />
                  </div>
                </div>
              ) : (
                <div role="tabpanel">
                  <h3 className="text-lg font-semibold text-white">Conte como foi</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Sua opinião nos ajuda a melhorar todos os dias.
                  </p>
                  <div className="mt-4">
                    <HubFeedbackForm />
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
