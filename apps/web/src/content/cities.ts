/**
 * Ponto de entrada tipado do conteúdo de cidades (fonte: `sites.config.json` validada por Zod em `@ideal/validators`).
 * Importe a partir deste ficheiro em conteúdo/SEO para alinhar ao plano de migração.
 */
export type {
  IdealNetCityConfig,
  SiteConfig,
  TeralinkConfig,
} from "@ideal/validators";
export {
  getIdealNetCity,
  getTeralink,
  idealNetCityIds,
  isIdealNetCityId,
  siteMeta,
  sites,
} from "@/lib/site-config";

export type { IdealNetCityId } from "@/lib/site-config";
