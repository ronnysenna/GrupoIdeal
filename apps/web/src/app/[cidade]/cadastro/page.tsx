import Link from "next/link";
import { notFound } from "next/navigation";
import { CadastroForm } from "@/components/forms/CadastroForm";
import { getIdealNetCity, idealNetCityIds, isIdealNetCityId } from "@/lib/site-config";

type Props = { params: Promise<{ cidade: string }> };

export function generateStaticParams() {
  return idealNetCityIds.map((cidade) => ({ cidade }));
}

export async function generateMetadata({ params }: Props) {
  const { cidade } = await params;
  const c = getIdealNetCity(cidade);
  if (!c) return { title: "Cadastro" };
  const base = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  );
  const title = `Cadastro | Ideal Net ${c.titleCity}`;
  const description = `Preencha seu cadastro de internet em ${c.titleCity}. A equipe da Ideal Net entrará em contato.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: new URL(`/${c.id}/cadastro`, base).toString(),
    },
  };
}

export default async function CidadeCadastroPage({ params }: Props) {
  const { cidade } = await params;
  if (!isIdealNetCityId(cidade)) {
    notFound();
  }
  const c = getIdealNetCity(cidade);
  if (!c) notFound();

  return (
    <div className="min-h-screen bg-zinc-100 py-8 sm:py-12">
      <p className="mb-4 text-center">
        <Link href={`/${c.id}`} className="text-sm text-blue-600 hover:underline">
          ← Ideal Net {c.titleCity}
        </Link>{" "}
        ·{" "}
        <Link href="/" className="text-sm text-zinc-500 hover:underline">
          Início
        </Link>
      </p>
      <CadastroForm
        city={c.id as "palmacia" | "pacoti" | "ibicuitinga"}
        title="Cadastro de clientes"
        subtitle={`Ideal Net - ${c.titleCity}/CE`}
        logoSrc="ideal"
      />
    </div>
  );
}
