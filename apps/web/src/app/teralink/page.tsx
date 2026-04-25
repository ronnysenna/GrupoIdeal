import type { Metadata } from "next";
import { TeralinkView } from "@/components/teralink/TeralinkView";
import { getTeralink } from "@/lib/site-config";

const title = "Teralink Fibra — Internet de Alta Velocidade em Fortaleza";
const description =
  "Internet fibra óptica em Fortaleza e região. Planos residenciais a partir de R$ 49,90. Velocidade garantida e suporte local.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  alternates: {
    canonical: "/teralink",
  },
};

export default function TeralinkPage() {
  const teralink = getTeralink();
  return <TeralinkView teralink={teralink} />;
}
