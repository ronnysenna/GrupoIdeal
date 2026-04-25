import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/cities";
import { idealNetCityIds } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date();
  const fixed = ["/", "/idealnet", "/teralink", "/teralink/cadastro", "/rastreamento"].map(
    (path) => ({
      url: canonicalUrl(path),
      lastModified: lastmod,
    }),
  );
  const cities: MetadataRoute.Sitemap = idealNetCityIds.flatMap((id) => {
    return [
      { url: canonicalUrl(`/${id}`), lastModified: lastmod },
      { url: canonicalUrl(`/${id}/cadastro`), lastModified: lastmod },
    ];
  });
  return [...fixed, ...cities];
}
