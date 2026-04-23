/**
 * Gera sitemap.xml na raiz do projeto (URLs relativas ao host).
 * Uso: node scripts/generate-sitemap.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cfg = JSON.parse(fs.readFileSync(path.join(root, "sites.config.json"), "utf8"));

const base = (process.env.PUBLIC_SITE_URL || "https://www.exemplo.com.br").replace(/\/$/, "");

const urls = [
  { loc: `${base}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${base}/cidades/teralink/`, changefreq: "monthly", priority: "0.8" },
];

for (const c of cfg.cities || []) {
  const prefix = `${base}/cidades/${c.id}/`;
  const pages = [
    "index.html",
    "fibra.html",
    "radio.html",
    "dedicado.html",
    "fusao.html",
    "temporario.html",
    "vpn.html",
    "firewall.html",
    "ponto.html",
    "quemsomos.html",
    "fale.html",
    "assine.html",
  ];
  for (const p of pages) {
    urls.push({ loc: prefix + p, changefreq: "monthly", priority: p === "index.html" ? "0.9" : "0.7" });
  }
}

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url><loc>${escapeXml(u.loc)}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

fs.writeFileSync(path.join(root, "sitemap.xml"), xml, "utf8");
console.log("sitemap.xml gerado. Defina PUBLIC_SITE_URL para o domínio real.");

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}
