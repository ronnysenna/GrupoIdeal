"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HUB_PHONE_DISPLAY,
  HUB_PHONE_TEL,
  HUB_PHONE_WA,
} from "@/content/hub";
import { buildWhatsAppUrl, telHref } from "@/lib/site-config";
import {
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./hub/icons";

const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const whatsHref = buildWhatsAppUrl({
    phone: HUB_PHONE_WA,
    message: "Olá! Vim pelo site do Grupo Ideal e gostaria de mais informações.",
  });

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-colors",
        scrolled
          ? "border-b border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#0a0f1e]/60"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#top"
          aria-label="Ir para o topo - Grupo Ideal"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
        >
          <Image
            src="/images/logoGrupoIdeal.png"
            alt="Grupo Ideal"
            width={480}
            height={80}
            className="h-12 w-auto max-w-full object-contain object-left sm:h-14 md:h-16"
            priority
          />
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium md:flex"
          aria-label="Navegação principal"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={telHref(HUB_PHONE_TEL)}
            aria-label={`Ligar para ${HUB_PHONE_DISPLAY}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden lg:inline">{HUB_PHONE_DISPLAY}</span>
            <span className="lg:hidden">Ligar</span>
          </a>
          <a
            href={whatsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={[
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-black/60 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />
        <aside
          className={[
            "absolute right-0 top-0 h-full w-[82%] max-w-sm border-l border-white/10 bg-[#0a0f1e] p-6 shadow-xl transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between">
            <Image
              src="/images/logoGrupoIdeal.png"
              alt="Grupo Ideal"
              width={400}
              height={68}
              className="h-12 w-auto max-w-[min(100%,20rem)] object-contain object-left sm:h-14"
            />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="Navegação móvel">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 grid gap-3">
            <a
              href={telHref(HUB_PHONE_TEL)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {HUB_PHONE_DISPLAY}
            </a>
            <a
              href={whatsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
