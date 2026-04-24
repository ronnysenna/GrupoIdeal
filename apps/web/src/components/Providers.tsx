"use client";

import { AppToaster } from "@ideal/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AppToaster />
    </>
  );
}
