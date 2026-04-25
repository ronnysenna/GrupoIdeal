import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getIdealNetCity,
  idealNetCityIds,
  isIdealNetCityId,
} from "@/lib/site-config";

type Props = { params: Promise<{ cidade: string }> };

export function generateStaticParams() {
  return idealNetCityIds.map((cidade) => ({ cidade }));
}

export async function generateMetadata({ params }: Props) {
  const { cidade } = await params;
  const c = getIdealNetCity(cidade);
  if (!c) return { title: "Cidade" };
  return {
    title: `Ideal Net ${c.titleCity} | Internet fibra e rádio`,
    description: `Internet de alta velocidade em ${c.titleCity}. Contato, planos e cadastro.`,
  };
}

export default async function CidadePage({ params }: Props) {
  const { cidade } = await params;
  if (!isIdealNetCityId(cidade)) {
    notFound();
  }
  const c = getIdealNetCity(cidade);
  if (!c) notFound();

  const wa = `https://api.whatsapp.com/send?phone=${c.whatsappPhoneParam.replace(/\D/g, "")}&text=${encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.")}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/">
            <Image
              src="/images/logoGrupoIdeal.png"
              alt="Grupo Ideal"
              width={180}
              height={56}
              className="h-9 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/idealnet" className="text-slate-500 hover:text-slate-800">
              Cidades
            </Link>
            <Link
              href={`/${c.id}/cadastro`}
              className="rounded-lg bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-700"
            >
              Cadastro
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold">Ideal Net {c.titleCity}</h1>
        <p className="mt-1 text-slate-600">Internet com suporte local e central do assinante.</p>

        <div className="mt-6 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm">
          <p>
            <span className="font-medium text-slate-700">Endereço:</span> {c.address}
          </p>
          <p>
            <a href={c.phoneTelHref} className="text-blue-600 hover:underline">
              {c.phoneLabel}
            </a>
          </p>
          <p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              WhatsApp {c.whatsappDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${c.email}`} className="text-blue-600 hover:underline">
              {c.email}
            </a>
          </p>
          {c.centralUrl ? (
            <p>
              <a
                href={c.centralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-violet-700 hover:underline"
              >
                Central do assinante
              </a>
            </p>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${c.id}/cadastro`}
            className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Preencher cadastro
          </Link>
        </div>
      </section>
    </div>
  );
}
