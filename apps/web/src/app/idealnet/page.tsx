import Image from "next/image";
import Link from "next/link";
import { sites } from "@/lib/site-config";

export const metadata = {
  title: "Ideal NET — Internet em Palmácia, Pacoti e Ibicuitinga",
  description: "Internet fibra e rádio com suporte local. Escolha sua cidade e veja planos e cadastro.",
};

export default function IdealNetPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/">
            <Image src="/images/logoGrupoIdeal.png" alt="Ideal NET" width={180} height={56} className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            Início
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6">
        <h1 className="text-3xl font-bold">Internet de alta velocidade</h1>
        <p className="mt-2 text-slate-600">Selecione sua cidade Ideal NET</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {sites.cities.map((c) => (
            <li key={c.id}>
              <Link
                href={`/${c.id}`}
                className="block rounded-2xl border border-slate-200 bg-white p-6 text-lg font-semibold shadow-sm transition hover:border-blue-400 hover:shadow"
              >
                {c.titleCity}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate-500">Fibra (sede) e rádio em localidades — planos no cadastro.</p>
      </section>
    </div>
  );
}
