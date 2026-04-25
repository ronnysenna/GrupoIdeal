import type { Metadata } from "next";
import { SolucoesDigitaisView } from "@/components/solucoes-digitais/SolucoesDigitaisView";

const title = "Ideal Soluções Digitais — Sites, sistemas e IA";
const description =
  "Desenvolvimento de sites, sistemas web, integrações e agentes de inteligência artificial. Atendimento via WhatsApp e e-mail.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  alternates: {
    canonical: "/solucoes-digitais",
  },
};

export default function SolucoesDigitaisPage() {
  return <SolucoesDigitaisView />;
}
