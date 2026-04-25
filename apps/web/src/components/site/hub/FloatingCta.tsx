"use client";

import { useEffect, useState } from "react";
import {
  HUB_PHONE_DISPLAY,
  HUB_PHONE_TEL,
  HUB_PHONE_WA,
} from "@/content/hub";
import { buildWhatsAppUrl, telHref } from "@/lib/site-config";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsHref = buildWhatsAppUrl({
    phone: HUB_PHONE_WA,
    message:
      "Olá! Vim pelo site do Grupo Ideal e gostaria de falar com um especialista.",
  });

  return (
    <div
      aria-label="Atalhos de contato"
      className={[
        "fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-300 motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <a
        href={telHref(HUB_PHONE_TEL)}
        aria-label={`Ligar para ${HUB_PHONE_DISPLAY}`}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 text-white shadow-lg backdrop-blur transition hover:bg-zinc-800"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a
        href={whatsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
