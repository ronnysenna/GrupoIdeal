import { HUB_COVERAGE } from "@/content/hub";
import { MapPinIcon } from "./icons";
import { Reveal } from "./Reveal";

const BRAND_TEXT: Record<string, string> = {
  idealnet: "text-blue-300",
  teralink: "text-cyan-200",
  rastreamento: "text-amber-200",
};
const BRAND_LABEL: Record<string, string> = {
  idealnet: "Ideal NET",
  teralink: "Teralink",
  rastreamento: "Rastreamento",
};

export function CoverageSection() {
  return (
    <section
      id="cobertura"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] py-20 sm:py-28"
      aria-labelledby="cobertura-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
            Cobertura
          </p>
          <h2
            id="cobertura-titulo"
            className="mt-3 text-3xl font-bold text-white sm:text-4xl"
          >
            Onde a gente atende
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Internet local de qualidade no interior e na capital do Ceará, com
            monitoramento veicular em todo o Brasil. Os contatos detalhados de cada
            unidade estão no rodapé da página.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {HUB_COVERAGE.map((c, i) => (
            <li key={`${c.brand}-${c.name}`}>
              <Reveal delay={i * 70}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <MapPinIcon
                      className={`h-5 w-5 ${BRAND_TEXT[c.brand] ?? "text-white"}`}
                    />
                    <p className="text-sm font-semibold text-white">
                      {c.name}
                      <span className="ml-1 text-xs font-normal text-zinc-500">
                        · {c.state}
                      </span>
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{c.description}</p>
                  <p
                    className={`mt-3 text-xs font-medium ${BRAND_TEXT[c.brand] ?? "text-white"}`}
                  >
                    {BRAND_LABEL[c.brand]}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
