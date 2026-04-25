import Link from "next/link";
import { HUB_BRANDS, type HubBrand } from "@/content/hub";
import { ArrowRightIcon, BRAND_ICON_MAP } from "./icons";
import { Reveal } from "./Reveal";

function BrandCard({ brand, delay }: { brand: HubBrand; delay: number }) {
  const Icon = BRAND_ICON_MAP[brand.iconKey];
  const cardClass = [
    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300",
    "hover:-translate-y-1 hover:bg-white/[0.06]",
    brand.accent.border,
    brand.accent.glow,
  ].join(" ");

  const inner = (
    <>
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${brand.accent.bgSoft} ${brand.accent.text}`}
          aria-hidden
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={`rounded-full ${brand.accent.badgeBg} ${brand.accent.badgeText} px-3 py-1 text-xs font-medium`}
        >
          {brand.badge}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{brand.name}</h3>
      <p className={`mt-1 text-sm font-medium ${brand.accent.text}`}>
        {brand.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {brand.description}
      </p>
      <span
        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${brand.accent.text}`}
      >
        {brand.cta}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );

  return (
    <Reveal delay={delay} className="h-full">
      {brand.external ? (
        <a
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
          aria-label={`${brand.name} – ${brand.tagline} (abre em nova aba)`}
        >
          {inner}
        </a>
      ) : (
        <Link
          href={brand.href}
          className={cardClass}
          aria-label={`${brand.name} – ${brand.tagline}`}
        >
          {inner}
        </Link>
      )}
    </Reveal>
  );
}

export function SolutionsGrid() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="solucoes-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                Nossas soluções
              </p>
              <h2
                id="solucoes-titulo"
                className="mt-3 text-3xl font-bold text-white sm:text-4xl"
              >
                Quatro empresas, uma promessa.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-400">
                Conectividade, segurança e inovação em um só grupo. Escolha por onde
                começar:
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {HUB_BRANDS.map((b, i) => (
            <li key={b.id}>
              <BrandCard brand={b} delay={i * 80} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
