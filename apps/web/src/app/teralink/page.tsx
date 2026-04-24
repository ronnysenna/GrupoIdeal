import Image from "next/image";
import Link from "next/link";
import { getTeralink } from "@/lib/site-config";

const waBase = (phone: string, text: string) =>
  `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

export const metadata = {
  title: "Teralink Fibra — Fortaleza | Ideal Soluções",
  description: "Internet fibra óptica em Fortaleza. Planos residenciais, suporte local e central do assinante.",
};

export default function TeralinkPage() {
  const t = getTeralink();
  const c = t.contact;
  const wa = waBase(
    c.whatsappPhoneParam,
    "Olá! Vim pelo site Teralink e gostaria de mais informações.",
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="min-w-0">
            <Image src="/images/logoteralink.png" alt="Teralink" width={200} height={64} className="h-14 w-auto" />
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
            <a className="text-zinc-600 hover:text-zinc-900" href="#planos">
              Planos
            </a>
            <a className="text-zinc-600 hover:text-zinc-900" href="#contato">
              Contato
            </a>
            <a
              href={t.contact.centralUrl}
              className="rounded-lg bg-violet-600 px-3 py-2 text-white hover:bg-violet-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Central do assinante
            </a>
            <Link href="/teralink/cadastro" className="text-blue-600 hover:underline">
              Cadastro
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-b from-violet-50 to-zinc-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Internet fibra em <span className="text-violet-600">Fortaleza</span>
          </h1>
          <p className="mt-3 text-zinc-600">Velocidade real, suporte local e o melhor custo-benefício.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#planos" className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">
              Ver planos
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              WhatsApp
            </a>
            <Link
              href="/teralink/cadastro"
              className="rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 text-sm font-semibold text-violet-800 hover:bg-violet-100"
            >
              Quero me cadastrar
            </Link>
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-12 sm:px-6">
        <h2 className="text-center text-2xl font-bold">Nossos planos</h2>
        <p className="text-center text-sm text-zinc-600">Valores aproximados — confirme no atendimento.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.plans.map((p) => (
            <li key={p.speed} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-violet-600">{p.speed} MEGA</p>
              <p className="mt-1 text-sm text-zinc-500">a partir de R$ {p.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contato" className="border-t border-zinc-200 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center text-sm text-zinc-600">
          <h2 className="text-lg font-semibold text-zinc-900">Contato Teralink</h2>
          <p className="mt-2">{c.address}</p>
          <p className="mt-1">WhatsApp: {c.whatsappDisplay}</p>
          <p className="mt-1">E-mail: {c.email}</p>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-xs text-zinc-500 sm:px-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Grupo Ideal
        </Link>
      </footer>
    </div>
  );
}
