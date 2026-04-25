import { buildHubJsonLd } from "@/lib/hub-seo";

/**
 * JSON-LD injetado no HTML; não altera o layout, só expõe dados para buscadores e IAs.
 */
export function HubJsonLd() {
  const json = buildHubJsonLd();
  return (
    <script
      type="application/ld+json"
      // JSON-LD: conteúdo estático, escapado via JSON.stringify
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
