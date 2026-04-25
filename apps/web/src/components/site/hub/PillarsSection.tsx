import { HUB_PILLARS } from "@/content/hub";
import { PILLAR_ICON_MAP } from "./icons";
import { Reveal } from "./Reveal";

export function PillarsSection() {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="diferenciais-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
            Por que o Grupo Ideal
          </p>
          <h2
            id="diferenciais-titulo"
            className="mt-3 text-3xl font-bold text-white sm:text-4xl"
          >
            Quatro pilares que sustentam tudo o que fazemos.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_PILLARS.map((p, i) => {
            const Icon = PILLAR_ICON_MAP[p.iconKey];
            return (
              <li key={p.title}>
                <Reveal delay={i * 80}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-200">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {p.description}
                    </p>
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
