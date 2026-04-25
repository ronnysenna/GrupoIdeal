import { HUB_PHONE_WA } from "@/content/hub";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const STATS = [
  { n: "10+", t: "Anos de operação" },
  { n: "4", t: "Empresas no grupo" },
  { n: "4+", t: "Cidades atendidas" },
  { n: "24/7", t: "Suporte humano" },
];

export function Hero() {
  const whatsHref = buildWhatsAppUrl({
    phone: HUB_PHONE_WA,
    message:
      "Olá! Vim pelo site do Grupo Ideal e gostaria de falar com um especialista.",
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Grupo Ideal · Tecnologia que conecta, monitora e digitaliza
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Um grupo,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              quatro frentes de tecnologia
            </span>{" "}
            para o seu dia a dia.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Do provedor de internet de fibra no interior do Ceará à automação com
            agentes de IA — o Grupo Ideal reúne quatro empresas para conectar,
            proteger e digitalizar pessoas e negócios.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-blue-500/20 transition hover:bg-zinc-100"
            >
              Solicitar orçamento
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Conhecer nossas soluções
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ul className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <li key={s.t}>
                <p className="text-3xl font-bold text-white">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                  {s.t}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
