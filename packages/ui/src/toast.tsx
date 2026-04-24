"use client";

import { Toaster as Sonner, toast } from "sonner";

/** Toaster global (sonner) — use com `toast()` importado do mesmo módulo. */
export function AppToaster() {
  return <Sonner position="top-center" richColors closeButton />;
}

export { toast };
