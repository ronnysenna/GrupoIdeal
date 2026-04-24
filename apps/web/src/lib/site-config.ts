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
