import { Suspense } from "react";
import { IdealNetView } from "@/components/idealnet/IdealNetView";
import {
  isIdealNetCityId,
  sites,
  type IdealNetCityId,
} from "@/lib/site-config";
import type { Metadata } from "next";

const DESC =
  "Ideal Net: fibra óptica, rádio e planos empresariais em Palmácia, Pacoti e Ibicuitinga. Escolha a cidade, compare preços e fale com a unidade no WhatsApp.";

export const metadata: Metadata = {
  title: "Ideal Net — Internet de fibra e rádio no Ceará",
  description: DESC,
  openGraph: {
    title: "Ideal Net — Internet de fibra e rádio",
    description: DESC,
    type: "website",
  },
  alternates: {
    canonical: "/idealnet",
  },
};

type PageProps = {
  searchParams: Promise<{ cidade?: string }>;
};

function IdealNetFallback() {
  return (
    <div className="min-h-screen bg-ideal-hub">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center text-zinc-500">Carregando…</div>
    </div>
  );
}

export default async function IdealNetPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const raw = sp.cidade;
  const initialCityId: IdealNetCityId = isIdealNetCityId(raw ?? "")
    ? (raw as IdealNetCityId)
    : "palmacia";

  return (
    <Suspense fallback={<IdealNetFallback />}>
      <IdealNetView cities={sites.cities} initialCityId={initialCityId} />
    </Suspense>
  );
}
