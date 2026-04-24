import Link from "next/link";
import { CadastroForm } from "@/components/forms/CadastroForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const metadata = {
  title: "Cadastro de clientes | Teralink",
  description: "Cadastre-se para internet fibra Teralink em Fortaleza.",
  openGraph: {
    title: "Cadastro de clientes | Teralink",
    description: "Cadastre-se para internet fibra Teralink em Fortaleza.",
    url: new URL("/teralink/cadastro", siteUrl).toString(),
  },
};

export default function TeralinkCadastroPage() {
  return (
    <div className="min-h-screen bg-zinc-100 py-8 sm:py-12">
      <p className="mb-4 text-center">
        <Link href="/teralink" className="text-sm text-blue-600 hover:underline">
          ← Teralink
        </Link>{" "}
        ·{" "}
        <Link href="/" className="text-sm text-zinc-500 hover:underline">
          Início
        </Link>
      </p>
      <CadastroForm
        city="teralink"
        title="Cadastro de clientes"
        subtitle="Teralink fibra óptica — Fortaleza/CE"
        logoSrc="teralink"
      />
    </div>
  );
}
