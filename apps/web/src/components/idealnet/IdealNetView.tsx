"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  IDEAL_NET_ABOUT_FEATURES,
  IDEAL_NET_ABOUT_STATS,
  IDEAL_NET_FAQ,
  IDEAL_NET_HERO_BADGES,
  IDEAL_NET_PLANS_BY_CITY,
  type PlanTabId,
} from "@/content/idealnet";
import { WhatsAppIcon } from "@/components/site/hub/icons";
import type { IdealNetCityConfig } from "@/lib/site-config";
import {
  buildWhatsAppUrl,
  idealNetCityIds,
  isIdealNetCityId,
  type IdealNetCityId,
} from "@/lib/site-config";
import { IdealNetLeadForm } from "./IdealNetLeadForm";

const ABOUT_ICON: Record<string, string> = {
  zap: "⚡",
  shield: "🛡️",
  brief: "💼",
  target: "🎯",
};

const TAB_LABEL: Record<PlanTabId, string> = {
  fibra: "Fibra óptica",
  radio: "Rádio",
  empresarial: "Empresarial",
};

type Props = {
  cities: IdealNetCityConfig[];
  initialCityId: IdealNetCityId;
};

function badgeLabel(kind: "popular" | "recomendado"): string {
  if (kind === "popular") return "Mais popular";
  return "Recomendado";
}

export function IdealNetView({ cities, initialCityId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<PlanTabId>("fibra");
  const [navOpen, setNavOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const cityId: IdealNetCityId = useMemo(() => {
    const raw = searchParams.get("cidade");
    if (raw && isIdealNetCityId(raw)) return raw;
    return initialCityId;
  }, [searchParams, initialCityId]);

  const city = useMemo(
    () => cities.find((c) => c.id === cityId) ?? cities[0],
    [cities, cityId],
  );

  const plans = IDEAL_NET_PLANS_BY_CITY[cityId];

  const setCity = (id: IdealNetCityId) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("cidade", id);
    router.replace(`/idealnet?${next.toString()}`, { scroll: false });
  };

  const waHero = buildWhatsAppUrl({
    phone: city.whatsappPhoneParam,
    message: `Olá! Ideal NET ${city.titleCity} — quero falar com um vendedor.`,
  });

  const waFloat = buildWhatsAppUrl({
    phone: city.whatsappPhoneParam,
    message: `Olá! Falo de ${city.titleCity} (Ideal NET).`,
  });

  return (
    <div className="relative min-h-screen bg-ideal-hub text-ideal-hub-fg">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]"
        aria-hidden
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f1e]/90 shadow-lg shadow-black/20 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Ideal NET"
              width={160}
              height={48}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
            <a href="#planos" className="hover:text-white">
              Planos
            </a>
            <a href="#sobre" className="hover:text-white">
              Sobre
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
            <a
              href={city.centralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-400"
            >
              Central do assinante
            </a>
          </nav>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 md:hidden"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="h-0.5 w-5 bg-zinc-200" />
            <span className="h-0.5 w-5 bg-zinc-200" />
            <span className="h-0.5 w-5 bg-zinc-200" />
          </button>
        </div>
        {navOpen ? (
          <div className="relative border-t border-white/10 bg-[#0a0f1e] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm font-medium text-zinc-200">
              <a href="#planos" onClick={() => setNavOpen(false)} className="py-1">
                Planos
              </a>
              <a href="#sobre" onClick={() => setNavOpen(false)} className="py-1">
                Sobre
              </a>
              <a href="#contato" onClick={() => setNavOpen(false)} className="py-1">
                Contato
              </a>
              <a
                href={city.centralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-500 py-2.5 text-center text-white"
                onClick={() => setNavOpen(false)}
              >
                Central do assinante
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-sm font-medium text-blue-300">Selecione sua cidade</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {idealNetCityIds.map((id) => {
              const c = cities.find((x) => x.id === id);
              if (!c) return null;
              const active = id === cityId;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setCity(id)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    active
                      ? "border-blue-400 bg-blue-500 text-white shadow-md shadow-blue-500/30"
                      : "border-white/15 bg-white/5 text-zinc-200 hover:border-white/25 hover:bg-white/10",
                  ].join(" ")}
                >
                  {c.titleCity}
                </button>
              );
            })}
          </div>

          <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Internet de{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-200 bg-clip-text text-transparent">
              alta velocidade
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Fibra óptica e rádio em {city.titleCity}. Planos residenciais e opções
            empresariais, com suporte local e atendimento transparente.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-blue-500/20 hover:bg-zinc-100"
            >
              Ver planos
            </a>
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {IDEAL_NET_HERO_BADGES.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                <span className="text-emerald-400">✓</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="planos" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Planos para <span className="text-cyan-300">{city.titleCity}</span>
            </h2>
            <p className="mt-2 text-zinc-400">Valores e condições da unidade selecionada</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(Object.keys(TAB_LABEL) as PlanTabId[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  tab === k
                    ? "bg-white text-zinc-900"
                    : "bg-white/5 text-zinc-300 ring-1 ring-white/10 hover:bg-white/10",
                ].join(" ")}
              >
                {TAB_LABEL[k]}
              </button>
            ))}
          </div>

          {tab === "fibra" && (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {plans.fibra.map((p) => (
                <li
                  key={p.id}
                  className={[
                    "relative flex flex-col rounded-2xl border p-5 transition",
                    p.featured
                      ? "border-blue-400/50 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-lg shadow-blue-500/10"
                      : "border-white/10 bg-white/[0.04] hover:border-white/20",
                  ].join(" ")}
                >
                  {p.badge ? (
                    <span
                      className={[
                        "mb-2 inline-block w-max rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        p.badge === "popular"
                          ? "bg-amber-500/15 text-amber-200"
                          : "bg-blue-500/20 text-blue-200",
                      ].join(" ")}
                    >
                      {badgeLabel(p.badge)}
                    </span>
                  ) : null}
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <div className="mt-3">
                    <span className="text-sm text-zinc-500">R$</span>{" "}
                    <span className="text-3xl font-extrabold text-white">{p.price}</span>
                    <span className="text-sm text-zinc-500">/mês</span>
                  </div>
                  <ul className="mt-4 flex-1 space-y-1.5 text-sm text-zinc-400">
                    <li>↓ Download: {p.download}</li>
                    <li>↑ Upload: {p.upload}</li>
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="mt-5 block w-full rounded-xl bg-blue-500 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    Assinar agora
                  </a>
                </li>
              ))}
            </ul>
          )}

          {tab === "radio" && (
            <ul className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2 sm:max-w-none">
              {plans.radio.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20"
                >
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <div className="mt-3">
                    <span className="text-sm text-zinc-500">R$</span>{" "}
                    <span className="text-3xl font-extrabold text-white">{p.price}</span>
                    <span className="text-sm text-zinc-500">/mês</span>
                  </div>
                  <ul className="mt-4 flex-1 space-y-1.5 text-sm text-zinc-400">
                    <li>↓ Download: {p.download}</li>
                    <li>↑ Upload: {p.upload}</li>
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="mt-5 block w-full rounded-xl bg-blue-500 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    Assinar agora
                  </a>
                </li>
              ))}
            </ul>
          )}

          {tab === "empresarial" && (
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {plans.empresarial.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col rounded-2xl border border-violet-500/30 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-5 shadow-lg shadow-violet-900/20"
                >
                  <span className="w-max rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-medium text-violet-200">
                    {p.badge}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-3 text-2xl font-semibold text-cyan-300">Sob consulta</p>
                  <ul className="mt-4 flex-1 space-y-1.5 text-sm text-zinc-300">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="mt-5 block w-full rounded-xl border border-white/20 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Solicitar orçamento
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        id="sobre"
        className="scroll-mt-20 border-b border-white/5 bg-white/[0.02] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ideal NET <span className="text-cyan-300">{city.titleCity}</span>
              </h2>
              <p className="mt-4 text-zinc-400">
                Há anos levando internet de qualidade à região. Nosso foco é conectar
                pessoas e negócios com fibra, rádio e canais de suporte próximos a você
                em {city.titleCity}.
              </p>
              <ul className="mt-8 grid grid-cols-3 gap-4 text-center sm:text-left">
                {IDEAL_NET_ABOUT_STATS.map((s) => (
                  <li key={s.t}>
                    <p className="text-2xl font-bold text-cyan-300 sm:text-3xl">{s.n}</p>
                    <p className="text-xs text-zinc-500">{s.t}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {IDEAL_NET_ABOUT_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <p className="text-xl">{ABOUT_ICON[f.icon]}</p>
                    <p className="mt-1 font-semibold text-white">{f.title}</p>
                    <p className="mt-0.5 text-xs text-zinc-400">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-lg font-bold text-white">Central do assinante</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Acesse boletos, faturas e abertura de chamado para o seu endereço.
                </p>
                <a
                  href={city.centralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-blue-400/50 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/10"
                >
                  Acessar central
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Perguntas frequentes
          </h2>
          <ul className="mt-8 space-y-2">
            {IDEAL_NET_FAQ.map((item, i) => {
              const open = faqOpen === i;
              return (
                <li
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-semibold text-white"
                    onClick={() => setFaqOpen(open ? null : i)}
                    aria-expanded={open}
                  >
                    {item.q}
                    <span className="shrink-0 text-zinc-500">{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <div className="border-t border-white/10 px-4 py-3 text-sm text-zinc-400">
                      {item.a}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="contato" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Entre em contato</h2>
          <p className="mt-2 text-zinc-400">Canais da unidade {city.titleCity}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <a
                href={waFloat}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition hover:bg-emerald-500/20"
              >
                <span className="text-emerald-300">
                  <WhatsAppIcon className="h-8 w-8" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-500">WhatsApp</p>
                  <p className="text-lg font-semibold text-white">{city.whatsappDisplay}</p>
                </div>
              </a>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">E-mail</p>
                <a href={`mailto:${city.email}`} className="text-lg font-medium text-blue-300 hover:text-blue-200">
                  {city.email}
                </a>
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">Endereço</p>
                <p className="text-sm text-zinc-300">{city.address}</p>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={city.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href={city.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-pink-300"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-100 shadow-xl shadow-black/30 ring-1 ring-white/5">
              <h3 className="text-lg font-bold text-white">Solicite um orçamento</h3>
              <p className="mb-4 text-sm text-zinc-400">Retornamos via WhatsApp.</p>
              <IdealNetLeadForm
                cityTitle={city.titleCity}
                whatsappPhoneParam={city.whatsappPhoneParam}
                plans={plans}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070b17] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <Image
                src="/images/logo.png"
                alt="Ideal NET"
                width={120}
                height={36}
                className="h-8 w-auto opacity-95"
              />
              <p className="mt-2 text-sm text-zinc-400">Internet de qualidade para sua casa e empresa.</p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <p className="font-semibold text-white">Navegação</p>
                <a href="#planos" className="mt-1 block text-zinc-400 transition hover:text-white">
                  Planos
                </a>
                <a href="#sobre" className="mt-1 block text-zinc-400 transition hover:text-white">
                  Sobre
                </a>
                <a href="#contato" className="mt-1 block text-zinc-400 transition hover:text-white">
                  Contato
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Cidades</p>
                {idealNetCityIds.map((id) => {
                  const c = cities.find((x) => x.id === id);
                  if (!c) return null;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setCity(id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-1 block w-full text-left text-zinc-400 transition hover:text-cyan-300"
                    >
                      {c.titleCity}
                    </button>
                  );
                })}
              </div>
              <div>
                <p className="font-semibold text-white">Grupo</p>
                <Link href="/" className="mt-1 block text-zinc-400 transition hover:text-white">
                  Todas as marcas
                </Link>
                <Link href="/teralink" className="mt-1 block text-zinc-400 transition hover:text-white">
                  Teralink Fortaleza
                </Link>
                <Link
                  href="/rastreamento"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Ideal Rastreamento
                </Link>
                <Link
                  href="/solucoes-digitais"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Soluções Digitais
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Ideal NET. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={waFloat}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-900/50 transition hover:scale-105 hover:bg-emerald-400"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
