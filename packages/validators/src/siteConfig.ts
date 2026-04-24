import { z } from "zod";

const planRowSchema = z.object({
  speed: z.string(),
  price: z.string(),
});

const teralinkContactSchema = z.object({
  whatsappPhoneParam: z.string(),
  whatsappDisplay: z.string(),
  email: z.string(),
  address: z.string(),
  centralUrl: z.string(),
});

const groupLinkBaseSchema = z.object({
  label: z.string(),
  description: z.string(),
  href: z.string(),
  external: z.boolean(),
});

const groupLinksSchema = z.object({
  idealRastreamento: groupLinkBaseSchema,
  teralink: groupLinkBaseSchema.extend({
    contact: teralinkContactSchema,
    plans: z.array(planRowSchema),
  }),
});

const cityEntrySchema = z.object({
  id: z.string(),
  titleCity: z.string(),
  centralUrl: z.string(),
  email: z.string(),
  address: z.string(),
  phoneTelHref: z.string(),
  phoneLabel: z.string(),
  whatsappPhoneParam: z.string(),
  whatsappDisplay: z.string(),
  facebookUrl: z.string().url(),
  instagramUrl: z.string().url(),
});

const metaSchema = z.object({
  brand: z.string(),
  idealNetBrand: z.string(),
  description: z.string(),
  inventoryNote: z.string(),
});

export const siteConfigSchema = z
  .object({
    meta: metaSchema,
    whatsappMessageEncoded: z.string(),
    groupLinks: groupLinksSchema,
    cities: z.array(cityEntrySchema).min(1),
  })
  .strict();

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type IdealNetCityConfig = SiteConfig["cities"][number];
export type TeralinkConfig = SiteConfig["groupLinks"]["teralink"];
