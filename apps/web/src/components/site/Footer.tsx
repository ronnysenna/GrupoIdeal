type FooterProps = {
  variant: "hub" | "simple";
};

/**
 * Rodapé do hub (escuro) ou linha mínima (claro) para subpáginas reutilizarem o texto legal.
 */
export function SiteFooter({ variant }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer className="mt-auto border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        <p>Ideal Soluções — conectando pessoas e empresas com tecnologia de ponta.</p>
      </footer>
    );
  }
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
      <p>Ideal Soluções — conectando pessoas e empresas com tecnologia de ponta.</p>
    </footer>
  );
}
