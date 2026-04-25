import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ideal Soluções — Conectividade e Tecnologia",
    template: "%s | Ideal Soluções",
  },
  description:
    "Internet, desenvolvimento, automação e rastreamento. Grupo Ideal Soluções (Ideal NET, Teralink e mais).",
  icons: {
    icon: [{ url: "/images/icone.png", type: "image/png" }],
    apple: "/images/icone.png",
    shortcut: "/images/icone.png",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ideal Soluções",
    title: "Ideal Soluções — Conectividade e Tecnologia",
    description:
      "Internet, desenvolvimento, automação e rastreamento. Ideal NET, Teralink e mais.",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Soluções",
    description: "Internet e soluções para empresas e residências no Ceará.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
