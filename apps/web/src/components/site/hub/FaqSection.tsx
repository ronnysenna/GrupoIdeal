"use client";

import { useState } from "react";
import { HUB_FAQ } from "@/content/hub";
import { ChevronIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="faq-titulo"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
            Dúvidas frequentes
          </p>
          <h2
            id="faq-titulo"
            className="mt-3 text-3xl font-bold text-white sm:text-4xl"
          >
            Perguntas que recebemos com frequência.
          </h2>
        </Reveal>

        <ul className="mt-10 space-y-3">
          {HUB_FAQ.map((item, i) => {
            const open = openIdx === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <li key={item.q}>
                <Reveal delay={i * 50}>
                  <div
                    className={[
                      "overflow-hidden rounded-2xl border bg-white/[0.03] transition-colors",
                      open
                        ? "border-blue-400/40 bg-white/[0.06]"
                        : "border-white/10 hover:border-white/20",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white"
                    >
                      <span>{item.q}</span>
                      <ChevronIcon
                        className={[
                          "h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 motion-reduce:transition-none",
                          open ? "rotate-180 text-blue-300" : "rotate-0",
                        ].join(" ")}
                      />
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={[
                        "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
