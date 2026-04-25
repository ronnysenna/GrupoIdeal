import { HUB_BRANDS } from "@/content/hub";
import { BRAND_ICON_MAP } from "./icons";
import { Reveal } from "./Reveal";

export function BrandsStrip() {
  return (
    <section
      aria-label="Empresas do Grupo Ideal"
      className="relative border-y border-white/10 bg-white/[0.02] py-8"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            As empresas do grupo
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {HUB_BRANDS.map((b) => {
              const Icon = BRAND_ICON_MAP[b.iconKey];
              return (
                <li
                  key={b.id}
                  className="flex items-center justify-center gap-2 text-zinc-300 transition-colors hover:text-white"
                >
                  <Icon className={`h-5 w-5 ${b.accent.text}`} />
                  <span className="text-sm font-semibold">{b.shortName}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
