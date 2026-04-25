import sitesJson from "../../../../sites.config.json";
import {
  siteConfigSchema,
  type IdealNetCityConfig,
  type TeralinkConfig,
} from "@ideal/validators";

export const sites = siteConfigSchema.parse(sitesJson);
export type { IdealNetCityConfig, TeralinkConfig };

export const siteMeta = sites.meta;
export const whatsappMessageEncoded = sites.whatsappMessageEncoded;

export function getIdealNetCity(
  id: string,
): IdealNetCityConfig | undefined {
  return sites.cities.find((c) => c.id === id);
}

export function getTeralink(): TeralinkConfig {
  return sites.groupLinks.teralink;
}

export const idealNetCityIds = ["palmacia", "pacoti", "ibicuitinga"] as const;
export type IdealNetCityId = (typeof idealNetCityIds)[number];

export function isIdealNetCityId(
  s: string,
): s is IdealNetCityId {
  return (idealNetCityIds as readonly string[]).includes(s);
}

/**
 * Monta uma URL `https://api.whatsapp.com/send?phone=...&text=...`
 * com a mensagem já encoded. Centraliza para evitar duplicação no JSX.
 */
export function buildWhatsAppUrl(params: {
  phone: string;
  message?: string;
}): string {
  const text = params.message
    ? encodeURIComponent(params.message)
    : whatsappMessageEncoded;
  return `https://api.whatsapp.com/send?phone=${params.phone}&text=${text}`;
}

/** Garante o prefixo `tel:` num número (aceita com ou sem o `+`). */
export function telHref(phone: string): string {
  const trimmed = phone.trim();
  if (trimmed.startsWith("tel:")) return trimmed;
  if (trimmed.startsWith("+")) return `tel:${trimmed}`;
  return `tel:+${trimmed}`;
}
