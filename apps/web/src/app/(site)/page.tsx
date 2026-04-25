import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/Header";
import { BrandsStrip } from "@/components/site/hub/BrandsStrip";
import { ContactSection } from "@/components/site/hub/ContactSection";
import { CoverageSection } from "@/components/site/hub/CoverageSection";
import { FaqSection } from "@/components/site/hub/FaqSection";
import { FloatingCta } from "@/components/site/hub/FloatingCta";
import { Hero } from "@/components/site/hub/Hero";
import { HubCtaBlock } from "@/components/site/hub/HubCtaBlock";
import { HubJsonLd } from "@/components/site/hub/HubJsonLd";
import { PillarsSection } from "@/components/site/hub/PillarsSection";
import { SolutionsGrid } from "@/components/site/hub/SolutionsGrid";
import { TestimonialsSection } from "@/components/site/hub/TestimonialsSection";
import { getPublicSiteUrl } from "@/lib/hub-seo";

const HUB_DESC =
  "Hub oficial do Grupo Ideal: Ideal Net (Palmácia, Pacoti, Ibicuitinga), Teralink Fibra em Fortaleza, rastreamento veicular nacional e Ideal Soluções Digitais (sites, sistemas e IA).";

export const metadata: Metadata = {
  title: "Grupo Ideal — internet, rastreamento e tecnologia (CE e Brasil)",
  description: HUB_DESC,
  keywords: [
    "Grupo Ideal",
    "Ideal Soluções",
    "Ideal Net",
    "Teralink",
    "Teralink Fibra",
    "Fortaleza",
    "Ceará",
    "Palmácia",
    "Pacoti",
    "Ibicuitinga",
    "fibra óptica",
    "rastreamento veicular",
    "monitoramento de frota",
    "desenvolvimento web",
    "automação com IA",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    title: "Grupo Ideal — internet, rastreamento e tecnologia",
    description: HUB_DESC,
    url: getPublicSiteUrl(),
    locale: "pt_BR",
    siteName: "Grupo Ideal / Ideal Soluções",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Ideal — internet, rastreamento e tecnologia",
    description: HUB_DESC,
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ideal-hub text-ideal-hub-fg">
      <HubJsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-2 focus:py-1 focus:text-zinc-900"
      >
        Ir para o conteúdo
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <BrandsStrip />
        <SolutionsGrid />
        <CoverageSection />
        <PillarsSection />
        <TestimonialsSection />
        <FaqSection />
        <HubCtaBlock />
        <ContactSection />
      </main>

      <SiteFooter variant="hub" />
      <FloatingCta />
    </div>
  );
}
