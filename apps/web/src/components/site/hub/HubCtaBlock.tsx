import {
  HUB_PHONE_DISPLAY,
  HUB_PHONE_TEL,
  HUB_PHONE_WA,
} from "@/content/hub";
import { buildWhatsAppUrl, telHref } from "@/lib/site-config";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

/**
 * CTA de conversão explícita (heading + 3 ações) para reforçar a meta da página
 * e alinhar com o bloco de contato logo abaixo. Boas para acessibilidade e SEO.
 */
export function HubCtaBlock() {
  const whatsHref = buildWhatsAppUrl({
    phone: HUB_PHONE_WA,
    message:
      "Olá! Vim pelo site do Grupo Ideal (hub) e quero falar com o comercial ou um especialista.",
  });

  return (
    <section
      id="cta-conversao"
      aria-labelledby="hub-cta-titulo"
      className="scroll-mt-24 border-y border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
            Próximo passo
          </p>
          <h2
            id="hub-cta-titulo"
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Fale com o Grupo Ideal
          </h2>
          <p className="mt-3 text-balance text-zinc-400">
            Comercial, suporte a provedores, rastreamento ou orçamento de sistemas: escolha o
            canal e retornamos o quanto antes.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            role="group"
            aria-label="Ações de contato do Grupo Ideal"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-blue-500/20 transition hover:bg-zinc-100"
            >
              Solicitar orçamento
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href={whatsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-6 py-3.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden />
              WhatsApp {HUB_PHONE_DISPLAY}
            </a>
            <a
              href={telHref(HUB_PHONE_TEL)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              Ligar: {HUB_PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>

        <p className="mt-6 text-xs text-zinc-500">
          Preferência por e-mail:{" "}
          <a
            href="mailto:contato@idealsolucoes.com.br"
            className="text-zinc-400 underline-offset-2 hover:text-white hover:underline"
          >
            contato@idealsolucoes.com.br
          </a>
        </p>
      </div>
    </section>
  );
}
