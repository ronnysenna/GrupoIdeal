import Image from "next/image";

/**
 * Cabeçalho da landing (hub) — fundo escuro, logo Grupo Ideal.
 * (A prop `variant` pode ser reintroduzida quando houver variantes de layout.)
 */
export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
      <Image
        src="/images/logoGrupoIdeal.png"
        alt="Ideal Soluções"
        width={180}
        height={60}
        className="h-10 w-auto"
        priority
      />
      <nav className="hidden gap-6 text-sm font-medium sm:flex" aria-label="Navegação principal">
        <a href="#servicos" className="text-zinc-300 hover:text-white">
          Serviços
        </a>
        <a href="#contato" className="text-zinc-300 hover:text-white">
          Contato
        </a>
        <a
          href="#contato"
          className="rounded-full bg-brand px-4 py-2 text-white shadow-sm hover:opacity-90"
        >
          Solicitar orçamento
        </a>
      </nav>
    </header>
  );
}
