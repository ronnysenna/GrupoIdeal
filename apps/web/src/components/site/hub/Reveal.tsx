"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em ms antes do reveal (cascata em listas). */
  delay?: number;
  /** Classe extra opcional (mantém o wrapper transparente para layout). */
  className?: string;
  /** Direção da entrada. Default: "up". */
  direction?: "up" | "down" | "left" | "right" | "fade";
};

/**
 * Wrapper acessível: respeita `prefers-reduced-motion` e dispensa libs externas.
 * Aplica translação + fade quando o elemento entra no viewport (uma vez).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Defer para evitar setState síncrono dentro do efeito (cascata de render).
      const raf = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(raf);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const offset =
    direction === "up"
      ? "translate-y-6"
      : direction === "down"
        ? "-translate-y-6"
        : direction === "left"
          ? "translate-x-6"
          : direction === "right"
            ? "-translate-x-6"
            : "";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${offset} opacity-0`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
