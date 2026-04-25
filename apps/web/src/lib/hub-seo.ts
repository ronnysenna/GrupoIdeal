import { HUB_BRANDS, HUB_FAQ, HUB_EMAIL, HUB_PHONE_TEL } from "@/content/hub";
import { getTeralink } from "@/lib/site-config";

export function getPublicSiteUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (u) return u.replace(/\/$/, "");
  return "http://localhost:3000";
}

function absUrl(pathOrUrl: string): string {
  const base = getPublicSiteUrl();
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  if (!pathOrUrl.startsWith("/")) {
    return `${base}/${pathOrUrl}`;
  }
  return `${base}${pathOrUrl}`;
}

/**
 * Dados JSON-LD para a home hub: Organization, WebSite, lista de ofertas e FAQ
 * (Google, Bing e leitores de conteúdo/IA usam isso de forma previsível).
 */
export function buildHubJsonLd(): Record<string, unknown> {
  const base = getPublicSiteUrl();
  const orgId = `${base}/#organization`;
  const siteId = `${base}/#website`;
  const teralink = getTeralink();
  const tAddr = teralink.contact.address;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Grupo Ideal (Ideal Soluções)",
        alternateName: ["Grupo Ideal", "Ideal Soluções"],
        url: base,
        description:
          "Grupo de tecnologia com internet (Ideal NET e Teralink), rastreamento veicular (Ideal Rastreamento) e desenvolvimento com IA (Ideal Soluções Digitais) no Ceará e no Brasil.",
        image: absUrl("/images/logoGrupoIdeal.png"),
        email: HUB_EMAIL,
        telephone: HUB_PHONE_TEL,
        address: {
          "@type": "PostalAddress",
          streetAddress: tAddr,
          addressLocality: "Fortaleza",
          addressRegion: "CE",
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Ceará" },
          { "@type": "Country", name: "Brasil" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: HUB_EMAIL,
          telephone: HUB_PHONE_TEL,
          availableLanguage: ["Portuguese", "pt-BR"],
        },
        sameAs: HUB_BRANDS.filter((b) => b.external).map((b) => b.href),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: "Grupo Ideal — hub oficial",
        url: base,
        inLanguage: "pt-BR",
        description:
          "Página principal do Grupo Ideal: acesso a provedores, rastreamento, soluções digitais e canais oficiais de contato.",
        publisher: { "@id": orgId },
        potentialAction: {
          "@type": "ContactAction",
          name: "Falar com o comercial do Grupo Ideal",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${base}/#contato`,
          },
        },
      },
      {
        "@type": "ItemList",
        name: "Soluções do Grupo Ideal",
        numberOfItems: HUB_BRANDS.length,
        itemListElement: HUB_BRANDS.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          description: b.description,
          item: b.external
            ? { "@type": "Service", name: b.name, url: b.href, description: b.tagline }
            : { "@type": "Service", name: b.name, url: absUrl(b.href), description: b.tagline },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: HUB_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };
}
