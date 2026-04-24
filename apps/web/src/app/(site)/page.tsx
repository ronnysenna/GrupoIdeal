import Link from "next/link";
import { SiteFooter } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/Header";
import { HubLeadForm } from "@/components/site/HubLeadForm";

const WHATS_HUB =
  "https://api.whatsapp.com/send?phone=5585991904540&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ideal-hub text-ideal-hub-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-2 focus:py-1 focus:text-zinc-900"
      >
        Ir para o conteúdo
      </a>

      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]"
        aria-hidden
      />

      <div className="relative">
        <SiteHeader />

        <main id="main" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <section className="py-16 sm:py-24">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Soluções completas para seu negócio
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Transforme seu negócio com{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                tecnologia de ponta
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Do acesso à internet de alta velocidade até sistemas com IA. Tudo o que sua empresa precisa
              para crescer no mundo digital.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Começar agora
                <span aria-hidden>→</span>
              </a>
              <a
                href={WHATS_HUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
              >
                Falar com especialista
              </a>
            </div>
            <ul className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center sm:text-left">
              {[
                { n: "5+", t: "Anos" },
                { n: "500+", t: "Clientes" },
                { n: "24/7", t: "Suporte" },
              ].map((s) => (
                <li key={s.t}>
                  <p className="text-2xl font-bold text-white">{s.n}</p>
                  <p className="text-xs text-zinc-500">{s.t}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="servicos" className="scroll-mt-8 py-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Nossos serviços</h2>
            <p className="mt-1 text-zinc-400">Soluções integradas para impulsionar seu negócio</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <Link
                href="/idealnet"
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/50 hover:bg-white/10"
              >
                <p className="text-xs font-medium uppercase text-blue-300">3 cidades</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Internet Ideal NET</h3>
                <p className="mt-1 text-sm text-zinc-400">Fibra e rádio em Palmácia, Pacoti e Ibicuitinga.</p>
                <span className="mt-3 inline-block text-sm font-medium text-blue-400 group-hover:underline">
                  Ver planos →
                </span>
              </Link>
              <Link
                href="/teralink"
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/50 hover:bg-white/10"
              >
                <p className="text-xs font-medium uppercase text-blue-300">Fortaleza</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Teralink fibra</h3>
                <p className="mt-1 text-sm text-zinc-400">Internet residencial em Fortaleza a partir de R$ 49,90.</p>
                <span className="mt-3 inline-block text-sm font-medium text-blue-400 group-hover:underline">
                  Ver planos →
                </span>
              </Link>
              <a
                href="https://www.idealsolucoes.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-500/50 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">Rastreamento veicular</h3>
                <p className="mt-1 text-sm text-zinc-400">Monitoramento em tempo real da frota (Ideal Rastreamento).</p>
                <span className="mt-3 inline-block text-sm font-medium text-sky-400 group-hover:underline">
                  Conhecer solução →
                </span>
              </a>
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
                <p className="text-xs font-medium uppercase text-amber-200">Mais procurado</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Desenvolvimento e IA</h3>
                <p className="mt-1 text-sm text-zinc-300">Sites, automação e integração de sistemas.</p>
                <a
                  href="#contato"
                  className="mt-3 inline-block text-sm font-medium text-amber-200 hover:underline"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          </section>

          <section id="contato" className="scroll-mt-8 py-16">
            <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 sm:p-10">
              <div>
                <h2 className="text-2xl font-bold text-white">Pronto para crescer?</h2>
                <p className="mt-2 text-sm text-zinc-400">Preencha o formulário ou fale com nossa equipe no WhatsApp.</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5585991904540"
                  className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 p-3 text-sm text-white hover:bg-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">(85) 99190-4540</span>
                </a>
                <p className="mt-2 text-sm text-zinc-500">contato@idealsolucoes.com.br</p>
              </div>
              <div className="rounded-xl bg-white p-4 text-zinc-900 sm:p-6">
                <h3 className="text-lg font-semibold">Solicite um orçamento</h3>
                <p className="text-sm text-zinc-600">Retornamos em breve (via WhatsApp).</p>
                <div className="mt-4">
                  <HubLeadForm />
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter variant="hub" />
      </div>
    </div>
  );
}
