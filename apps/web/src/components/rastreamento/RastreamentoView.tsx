"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/site/hub/icons";
import {
  RASTREAMENTO_APP_LINKS,
  RASTREAMENTO_FAQ,
  RASTREAMENTO_HIGHLIGHTS,
  RASTREAMENTO_LEGAL,
  RASTREAMENTO_SOCIAL,
  RASTREAMENTO_VEHICLE_TYPES,
} from "@/content/rastreamento";
import {
  RASTREAMENTO_ADDRESS,
  RASTREAMENTO_EMAIL,
  RASTREAMENTO_PHONE_DISPLAY,
  RASTREAMENTO_PHONE_TEL,
  RASTREAMENTO_WHATSAPP_DISPLAY,
  RASTREAMENTO_WHATSAPP_PARAM,
} from "@/content/hub";
import { buildWhatsAppUrl, telHref } from "@/lib/site-config";
import { RastreamentoLeadForm } from "./RastreamentoLeadForm";

const HIGHLIGHT_ICON: Record<(typeof RASTREAMENTO_HIGHLIGHTS)[number]["icon"], string> = {
  shield: "🛡️",
  clock: "🕐",
  lock: "🔒",
  truck: "🚚",
};

export function RastreamentoView() {
  const [navOpen, setNavOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const waDefault = buildWhatsAppUrl({
    phone: RASTREAMENTO_WHATSAPP_PARAM,
    message:
      "Olá! Vim pelo site da Ideal Rastreamento e gostaria de uma cotação.",
  });

  return (
    <div className="relative min-h-screen bg-[#061229] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(37,99,235,0.15),transparent_45%)]"
        aria-hidden
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#040d1f]/90 shadow-lg shadow-black/30 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center" aria-label="Grupo Ideal — início">
            <Image
              src="/images/Logo_rastro.png"
              alt="Ideal Rastreamento"
              width={220}
              height={64}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-300 md:flex">
            <a href="#solucoes" className="transition hover:text-amber-300">
              Soluções
            </a>
            <a href="#frotas" className="transition hover:text-amber-300">
              Frotas
            </a>
            <a href="#veiculos" className="transition hover:text-amber-300">
              Veículos
            </a>
            <a href="#faq" className="transition hover:text-amber-300">
              Dúvidas
            </a>
            <a href="#contato" className="transition hover:text-amber-300">
              Contato
            </a>
            <a
              href="#contato"
              className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-[#061229] shadow-md shadow-amber-500/25 transition hover:bg-amber-300"
            >
              Cotação grátis
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
          <div className="relative border-t border-white/10 bg-[#040d1f] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm font-medium text-zinc-200">
              <a href="#solucoes" onClick={() => setNavOpen(false)} className="py-1">
                Soluções
              </a>
              <a href="#frotas" onClick={() => setNavOpen(false)} className="py-1">
                Frotas
              </a>
              <a href="#veiculos" onClick={() => setNavOpen(false)} className="py-1">
                Veículos
              </a>
              <a href="#faq" onClick={() => setNavOpen(false)} className="py-1">
                Dúvidas
              </a>
              <a href="#contato" onClick={() => setNavOpen(false)} className="py-1">
                Contato
              </a>
              <a
                href="#contato"
                className="rounded-lg bg-amber-400 py-2.5 text-center font-semibold text-[#061229]"
                onClick={() => setNavOpen(false)}
              >
                Cotação grátis
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/90">
            Monitoramento veicular
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            Seu patrimônio{" "}
            <span className="text-amber-400">100%</span>{" "}
            <span className="text-white">protegido!</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm sm:text-base">
            <span className="font-semibold text-amber-300">24h por dia</span>
            <span className="hidden text-zinc-600 sm:inline" aria-hidden>
              ·
            </span>
            <span className="text-white">
              <span className="text-4xl font-black tabular-nums text-amber-400 sm:text-5xl">7</span>
              <span className="ml-1 font-medium">dias por semana</span>
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-zinc-200">
            Bloqueio e desbloqueio <span className="text-amber-400">remoto!</span>
          </p>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Planos especiais <span className="font-semibold text-amber-300">para frotas!</span>{" "}
            Atendimento em todo o Brasil.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-[#061229] shadow-lg shadow-amber-500/30 transition hover:bg-amber-300"
            >
              Faça uma cotação grátis
            </a>
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="solucoes" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Por que a Ideal Rastreamento</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Tecnologia de rastreamento, plataforma de gestão e equipe comercial para particulares e
            empresas.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {RASTREAMENTO_HIGHLIGHTS.map((h) => (
              <li
                key={h.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-amber-400/30"
              >
                <span className="text-2xl" aria-hidden>
                  {HIGHLIGHT_ICON[h.icon]}
                </span>
                <h3 className="mt-2 font-semibold text-white">{h.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{h.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="frotas" className="scroll-mt-20 border-b border-white/5 bg-white/[0.02] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Planos especiais para <span className="text-amber-400">frotas</span>
              </h2>
              <p className="mt-3 text-zinc-400">
                Centralize o monitoramento dos veículos, reduza perdas e ganhe previsibilidade com
                relatórios e suporte comercial.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span> Propostas sob medida por porte e região
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span> Apoio na implantação e treinamento
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span> Condições comerciais para CNPJ
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-blue-600/5 p-6 sm:p-8">
              <p className="text-sm font-medium text-amber-200/90">Solicite uma proposta</p>
              <p className="mt-2 text-sm text-zinc-400">
                Conte quantos veículos deseja rastrear e a região de operação. Retornamos com os
                próximos passos.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 py-3 text-sm font-bold text-[#061229] transition hover:bg-amber-300"
              >
                Quero cotação para frota
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="veiculos" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Cobertura de veículos
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-zinc-400">
            Caminhões, carros e motos — fale com o comercial para viabilidade e equipamentos.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {RASTREAMENTO_VEHICLE_TYPES.map((v) => (
              <li
                key={v.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <p className="font-semibold text-white">{v.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/5 py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-lg font-bold text-white sm:text-xl">App, iPhone e computador</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Acesse a plataforma no <span className="text-zinc-200">PC</span>, no{" "}
            <span className="text-zinc-200">Android</span> (Google Play) ou no{" "}
            <span className="text-zinc-200">iPhone</span> (App Store). Dúvidas? Fale no WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={RASTREAMENTO_APP_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Google Play (Android)
            </a>
            <a
              href={RASTREAMENTO_APP_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              App Store (iPhone)
            </a>
            <a
              href={RASTREAMENTO_APP_LINKS.web}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-amber-400/25 bg-amber-500/10 px-4 py-2.5 text-sm font-medium text-amber-100 transition hover:bg-amber-500/20"
            >
              Acessar no PC
            </a>
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Dúvidas frequentes</h2>
          <ul className="mt-8 space-y-2">
            {RASTREAMENTO_FAQ.map((item, i) => {
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Fale conosco</h2>
          <p className="mt-2 text-zinc-400">Canais oficiais da Ideal Rastreamento</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition hover:bg-emerald-500/20"
              >
                <span className="text-emerald-300">
                  <WhatsAppIcon className="h-8 w-8" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-500">WhatsApp</p>
                  <p className="text-lg font-semibold text-white">{RASTREAMENTO_WHATSAPP_DISPLAY}</p>
                </div>
              </a>
              <a
                href={telHref(RASTREAMENTO_PHONE_TEL)}
                className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                  <span className="text-lg" aria-hidden>
                    ☎
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Telefone</p>
                  <p className="text-lg font-semibold text-white">{RASTREAMENTO_PHONE_DISPLAY}</p>
                </div>
              </a>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">E-mail</p>
                <a
                  href={`mailto:${RASTREAMENTO_EMAIL}`}
                  className="text-lg font-medium text-amber-300 hover:text-amber-200"
                >
                  {RASTREAMENTO_EMAIL}
                </a>
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">Endereço</p>
                <p className="text-sm text-zinc-300">{RASTREAMENTO_ADDRESS}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href={RASTREAMENTO_SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-amber-300"
                >
                  Facebook
                </a>
                <a
                  href={RASTREAMENTO_SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-pink-300"
                >
                  Instagram
                </a>
                <span className="text-zinc-600">{RASTREAMENTO_SOCIAL.label}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-100 shadow-xl shadow-black/30 ring-1 ring-amber-400/10">
              <h3 className="text-lg font-bold text-white">Cotação grátis</h3>
              <p className="mb-4 text-sm text-zinc-400">Preencha e enviaremos pelo WhatsApp.</p>
              <RastreamentoLeadForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#030814] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <Image
                src="/images/Logo_rastro.png"
                alt="Ideal Rastreamento"
                width={200}
                height={56}
                className="h-12 w-auto opacity-95"
              />
              <p className="mt-2 max-w-sm text-sm text-zinc-500">
                Seu patrimônio protegido com rastreamento, alertas e gestão 24/7.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <p className="font-semibold text-white">Navegação</p>
                <a
                  href="#solucoes"
                  className="mt-1 block text-zinc-400 transition hover:text-amber-300"
                >
                  Soluções
                </a>
                <a
                  href="#frotas"
                  className="mt-1 block text-zinc-400 transition hover:text-amber-300"
                >
                  Frotas
                </a>
                <a
                  href="#contato"
                  className="mt-1 block text-zinc-400 transition hover:text-amber-300"
                >
                  Contato
                </a>
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
                  href="/teralink"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Teralink Fibra
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-6 text-right text-[10px] leading-snug text-zinc-600 sm:text-xs">
            {RASTREAMENTO_LEGAL.install}
            <br />
            {RASTREAMENTO_LEGAL.photos}
          </p>
          <p className="mt-4 border-t border-white/10 pt-6 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Ideal Rastreamento. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={waDefault}
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
