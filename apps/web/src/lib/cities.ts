import type { CitySlug } from "./cadastro-options";
import { getIdealNetCity, getTeralink, idealNetCityIds, isIdealNetCityId, sites } from "./site-config";

const base = () => process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Slugs de cidades com página dedicada (Ideal NET + Teralink). */
export function getAllPublicCitySlugs(): readonly string[] {
  return [...idealNetCityIds, "teralink"];
}

export function isKnownCityPath(segment: string): segment is string {
  return isIdealNetCityId(segment) || segment === "teralink";
}

export function pathForCidade(cidade: string) {
  return `/${cidade}`;
}

export function pathForCidadeCadastro(cidade: string) {
  return `/${cidade}/cadastro`;
}

export function canonicalUrl(path: string) {
  return new URL(path, base()).toString();
}

/** Resolve cadastro a partir do segmento de URL. */
export function toCadastroCitySlug(segment: string): CitySlug | null {
  if (segment === "teralink" || isIdealNetCityId(segment)) {
    return segment;
  }
  return null;
}

export function getCityLabelBySlug(slug: string): string | null {
  if (slug === "teralink") {
    return getTeralink().label;
  }
  const c = getIdealNetCity(slug);
  return c ? `Ideal NET — ${c.titleCity}` : null;
}

export { getIdealNetCity, getTeralink, idealNetCityIds, isIdealNetCityId, sites };
