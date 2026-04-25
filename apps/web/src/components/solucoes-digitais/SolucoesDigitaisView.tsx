"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/site/hub/icons";
import {
  IDEAL_SOLUCOES_DIGITAIS_CONTACT,
  IDEAL_SOLUCOES_DIGITAIS_FAQ,
  IDEAL_SOLUCOES_DIGITAIS_PORTFOLIO,
  IDEAL_SOLUCOES_DIGITAIS_SERVICES,
  solucoesDigitaisServiceIcon,
} from "@/content/solucoes-digitais";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { SolucoesDigitaisLeadForm } from "./SolucoesDigitaisLeadForm";

const { whatsappPhoneParam, whatsappDisplay, email } = IDEAL_SOLUCOES_DIGITAIS_CONTACT;

export function SolucoesDigitaisView() {
  const [navOpen, setNavOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const wa = buildWhatsAppUrl({
    phone: whatsappPhoneParam,
    message:
      "Olá! Vim pelo site da Ideal Soluções Digitais e quero falar sobre um projeto (site, sistema ou IA).",
  });

  return (
    <div className="relative min-h-screen bg-[#0b0618] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_50%)]"
        aria-hidden
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0618]/90 shadow-lg shadow-black/30 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Grupo Ideal — início">
            <Image
              src="/images/logoGrupoIdeal.png"
              alt="Ideal Soluções Digitais"
              width={780}
              height={80}
              className="h-[80px] w-auto max-w-full object-contain object-left"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-300 md:flex">
            <a href="#servicos" className="hover:text-violet-300">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-violet-300">
              Portfólio
            </a>
            <a href="#faq" className="hover:text-violet-300">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-violet-300">
              Contato
            </a>
            <a
              href="#contato"
              className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/25 hover:bg-violet-400"
            >
              Falar com o time
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
          <div className="border-t border-white/10 bg-[#0b0618] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm text-zinc-200">
              <a href="#servicos" onClick={() => setNavOpen(false)} className="py-1">
                Serviços
              </a>
              <a href="#portfolio" onClick={() => setNavOpen(false)} className="py-1">
                Portfólio
              </a>
              <a href="#faq" onClick={() => setNavOpen(false)} className="py-1">
                Dúvidas
              </a>
              <a href="#contato" onClick={() => setNavOpen(false)} className="py-1">
                Contato
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">
            Desenvolvimento & IA
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl sm:leading-tight">
            Criamos{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
              soluções digitais
            </span>{" "}
            sob medida
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Sites, sistemas web, integrações e agentes de inteligência artificial — da ideia ao deploy,
            com foco em clareza, segurança e evolução contínua.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
            >
              Solicitar orçamento
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">O que desenvolvemos</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Uma equipe para cobrir o ciclo completo: descoberta, arquitetura, implementação e suporte.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {IDEAL_SOLUCOES_DIGITAIS_SERVICES.map((s) => (
              <li
                key={s.id}
                className="rounded-2xl border border-violet-500/20 bg-white/[0.03] p-5 transition hover:border-violet-400/40"
              >
                <span className="text-2xl" aria-hidden>
                  {solucoesDigitaisServiceIcon(s.icon)}
                </span>
                <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-20 border-b border-white/5 bg-violet-950/20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Portfólio</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Cases e produtos disponíveis. Quando houver link público do projeto, o card leva direto
            ao site ou demo.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IDEAL_SOLUCOES_DIGITAIS_PORTFOLIO.map((item) => {
              const hasLink = item.href.trim().length > 0;
              const inner = (
                <>
                  {item.tag ? (
                    <span className="mb-2 inline-block rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-medium text-violet-200">
                      {item.tag}
                    </span>
                  ) : null}
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-400">{item.description}</p>
                  {hasLink ? (
                    <span className="mt-4 text-sm font-medium text-violet-300">Abrir projeto →</span>
                  ) : (
                    <p className="mt-4 text-xs text-zinc-500">Link público em breve</p>
                  )}
                </>
              );
              const cardClass =
                "flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-violet-400/30";

              return (
                <li key={item.id}>
                  {hasLink ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass + " block"}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Perguntas frequentes</h2>
          <ul className="mt-8 space-y-2">
            {IDEAL_SOLUCOES_DIGITAIS_FAQ.map((item, i) => {
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Contato</h2>
          <p className="mt-2 text-zinc-400">Ideal Soluções Digitais</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition hover:bg-emerald-500/20"
              >
                <WhatsAppIcon className="h-8 w-8 text-emerald-300" />
                <div>
                  <p className="text-sm font-medium text-zinc-500">WhatsApp</p>
                  <p className="text-lg font-semibold text-white">{whatsappDisplay}</p>
                </div>
              </a>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-zinc-500">E-mail</p>
                <a href={`mailto:${email}`} className="text-lg font-medium text-violet-300 hover:text-violet-200">
                  {email}
                </a>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Atendimento com foco em projetos digitais, com reuniões remotas e entregas
                documentadas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-100 shadow-xl ring-1 ring-violet-500/10">
              <h3 className="text-lg font-bold text-white">Envie o briefing</h3>
              <p className="mb-4 text-sm text-zinc-400">
                Os dados vão para o WhatsApp {whatsappDisplay} com cópia no corpo da mensagem.
              </p>
              <SolucoesDigitaisLeadForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05030c] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <Image
                src="/images/logoGrupoIdeal.png"
                alt="Ideal Soluções Digitais"
                width={780}
                height={80}
                className="h-[80px] w-auto max-w-full object-contain object-left opacity-95"
              />
              <p className="mt-2 max-w-sm text-sm text-zinc-500">
                Parte do Grupo Ideal — sites, sistemas e IA para o seu crescimento.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <p className="font-semibold text-white">Navegação</p>
                <a
                  href="#servicos"
                  className="mt-1 block text-zinc-400 transition hover:text-violet-300"
                >
                  Serviços
                </a>
                <a
                  href="#portfolio"
                  className="mt-1 block text-zinc-400 transition hover:text-violet-300"
                >
                  Portfólio
                </a>
                <a
                  href="#contato"
                  className="mt-1 block text-zinc-400 transition hover:text-violet-300"
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
                  Ideal Net
                </Link>
                <Link
                  href="/teralink"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Teralink
                </Link>
                <Link
                  href="/rastreamento"
                  className="mt-1 block text-zinc-400 transition hover:text-white"
                >
                  Rastreamento
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Ideal Soluções Digitais. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={wa}
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
