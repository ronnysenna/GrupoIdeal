"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/site/hub/icons";
import {
  TERALINK_ABOUT_FEATURES,
  TERALINK_ABOUT_STATS,
  TERALINK_CITY,
  TERALINK_EMPRESARIAL,
  TERALINK_FAQ,
  TERALINK_HERO_BADGES,
  TERALINK_RESIDENTIAL_PLANS,
  teralinkAboutIcon,
  teralinkBadgeLabel,
} from "@/content/teralink";
import type { TeralinkConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { TeralinkLeadForm } from "./TeralinkLeadForm";

type Props = {
  teralink: TeralinkConfig;
};

const waMessageDefault =
  "Olá! Vim pelo site Teralink e gostaria de mais informações.";

export function TeralinkView({ teralink }: Props) {
  const c = teralink.contact;
  const [navOpen, setNavOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const waHero = buildWhatsAppUrl({
    phone: c.whatsappPhoneParam,
    message: waMessageDefault,
  });

  const waFloat = buildWhatsAppUrl({
    phone: c.whatsappPhoneParam,
    message: waMessageDefault,
  });

  return (
    <div className="relative min-h-screen bg-ideal-hub text-ideal-hub-fg">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]"
        aria-hidden
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f1e]/90 shadow-lg shadow-black/20 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center" aria-label="Grupo Ideal — início">
            <Image
              src="/images/logoteralink.png"
              alt="Teralink Fibra"
              width={200}
              height={72}
              className="h-16 w-auto sm:h-[72px]"
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
              href={c.centralUrl}
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
                href={c.centralUrl}
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
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Internet fibra óptica em{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-200 bg-clip-text text-transparent">
              {TERALINK_CITY}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Velocidade real, estabilidade garantida e o melhor custo-benefício para sua
            casa ou empresa.
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
            {TERALINK_HERO_BADGES.map((t) => (
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Nossos planos</h2>
            <p className="mt-2 text-zinc-400">
              Internet rápida, estável e com o melhor custo-benefício
            </p>
          </div>
          <ul
            className="mt-10 grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:grid-cols-4"
          >
            {TERALINK_RESIDENTIAL_PLANS.map((p) => (
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
                        : p.badge === "recomendado"
                          ? "bg-blue-500/20 text-blue-200"
                          : "bg-violet-500/20 text-violet-200",
                    ].join(" ")}
                  >
                    {teralinkBadgeLabel(p.badge)}
                  </span>
                ) : null}
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-0.5 text-white">
                  <span className="text-sm text-zinc-500">R$</span>
                  <span className="text-3xl font-extrabold tabular-nums">{p.priceMain}</span>
                  <span className="text-sm text-zinc-400">{p.priceRest}</span>
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

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-white">{TERALINK_EMPRESARIAL.title}</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-400">
              {TERALINK_EMPRESARIAL.body}
            </p>
            <a
              href="#contato"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-blue-500/15 hover:bg-zinc-100"
            >
              Solicitar orçamento
            </a>
          </div>
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
                Teralink Fibra{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {TERALINK_CITY}
                </span>
              </h2>
              <p className="mt-4 text-zinc-400">
                Levando internet de qualidade para residências e empresas em Fortaleza e
                região. Com tecnologia de ponta em fibra óptica, garantimos velocidade
                real e conexão estável para você.
              </p>
              <ul className="mt-8 grid grid-cols-3 gap-4 text-center sm:text-left">
                {TERALINK_ABOUT_STATS.map((s) => (
                  <li key={s.t}>
                    <p className="text-2xl font-bold text-cyan-300 sm:text-3xl">{s.n}</p>
                    <p className="text-xs text-zinc-500">{s.t}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {TERALINK_ABOUT_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <p className="text-xl">{teralinkAboutIcon(f.icon)}</p>
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
                  Acesse sua conta, consulte faturas e abra chamados técnicos online.
                </p>
                <a
                  href={c.centralUrl}
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
            {TERALINK_FAQ.map((item, i) => {
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
          <p className="mt-2 text-zinc-400">Canais Teralink Fibra — {TERALINK_CITY}</p>
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
                  <p className="text-lg font-semibold text-white">{c.whatsappDisplay}</p>
                </div>
              </a>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">E-mail</p>
                <a
                  href={`mailto:${c.email}`}
                  className="text-lg font-medium text-blue-300 hover:text-blue-200"
                >
                  {c.email}
                </a>
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">Endereço</p>
                <p className="text-sm text-zinc-300">{c.address}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-100 shadow-xl shadow-black/30 ring-1 ring-white/5">
              <h3 className="text-lg font-bold text-white">Solicite um orçamento</h3>
              <p className="mb-4 text-sm text-zinc-400">Retornamos via WhatsApp.</p>
              <TeralinkLeadForm whatsappPhoneParam={c.whatsappPhoneParam} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070b17] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <Image
                src="/images/logoteralink.png"
                alt="Teralink Fibra"
                width={200}
                height={64}
                className="h-14 w-auto opacity-95"
              />
              <p className="mt-2 text-sm text-zinc-400">
                Internet de qualidade com fibra óptica para você e sua empresa.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <p className="font-semibold text-white">Navegação</p>
                <a
                  href="#planos"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Planos
                </a>
                <a
                  href="#sobre"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Sobre
                </a>
                <a
                  href="#contato"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Contato
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Acesso rápido</p>
                <a
                  href={c.centralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Central do assinante
                </a>
                <Link
                  href="/teralink/cadastro"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Formulários
                </Link>
              </div>
              <div>
                <p className="font-semibold text-white">Grupo Ideal</p>
                <Link href="/" className="mt-1 block text-zinc-400 transition hover:text-white">
                  Todas as marcas
                </Link>
                <Link
                  href="/idealnet"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Ideal NET
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
            © {new Date().getFullYear()} Teralink Fibra. Todos os direitos reservados.
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
