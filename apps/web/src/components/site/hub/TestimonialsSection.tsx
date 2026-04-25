import { HUB_TESTIMONIALS } from "@/content/hub";
import { StarIcon } from "./icons";
import { Reveal } from "./Reveal";

const BRAND_ACCENT: Record<string, string> = {
  idealnet: "text-blue-300",
  teralink: "text-cyan-200",
  rastreamento: "text-amber-200",
  solucoesDigitais: "text-violet-200",
};

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] py-20 sm:py-28"
      aria-labelledby="depoimentos-titulo"
    >
      {/*
        NOTA INTERNA — não exibido para o usuário final:
        Os depoimentos abaixo são placeholders ilustrativos.
        Substituir por depoimentos reais (com autorização) antes de divulgar.
      */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
            Quem usa, recomenda
          </p>
          <h2
            id="depoimentos-titulo"
            className="mt-3 text-3xl font-bold text-white sm:text-4xl"
          >
            O que dizem nossos clientes
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {HUB_TESTIMONIALS.map((t, i) => (
            <li key={t.author}>
              <Reveal delay={i * 90}>
                <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div
                    className={`flex gap-0.5 ${BRAND_ACCENT[t.brand] ?? "text-amber-200"}`}
                    aria-label="Avaliação 5 de 5"
                  >
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon
                        key={idx}
                        className="h-4 w-4 fill-current"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-zinc-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
