import type { Metadata } from "next";
import { RastreamentoView } from "@/components/rastreamento/RastreamentoView";

const title = "Ideal Rastreamento — Rastreamento veicular e frotas em todo o Brasil";
const description =
  "Proteja seu patrimônio com rastreamento veicular, bloqueio remoto, app e planos para frotas. Atendimento nacional. Fortaleza/CE. Cotação pelo site.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  alternates: {
    canonical: "/rastreamento",
  },
};

export default function RastreamentoPage() {
  return <RastreamentoView />;
}
