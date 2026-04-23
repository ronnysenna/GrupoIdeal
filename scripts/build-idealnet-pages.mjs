/**
 * Gera HTML das filiais Ideal NET a partir de Palmácia (canônico) + sites.config.json
 * Uso: node scripts/build-idealnet-pages.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cfg = JSON.parse(fs.readFileSync(path.join(root, "sites.config.json"), "utf8"));

const PAGES = [
  "index",
  "fibra",
  "radio",
  "dedicado",
  "fusao",
  "temporario",
  "vpn",
  "firewall",
  "ponto",
  "quemsomos",
  "fale",
  "assine",
];

const palm = cfg.cities.find((c) => c.id === "palmacia");
if (!palm) {
  console.error("sites.config.json: cidade palmacia obrigatória");
  process.exit(1);
}

const PAGE_DESC = {
  index: "Internet banda larga, fibra óptica e central do assinante.",
  fibra: "Planos de internet fibra óptica residencial e empresarial.",
  radio: "Internet via rádio 5.8 GHz.",
  dedicado: "Link dedicado para empresas.",
  fusao: "Serviços de fusão e fibra para empresas.",
  temporario: "Link temporário para eventos e obras.",
  vpn: "Conexões VPN seguras.",
  firewall: "Soluções de firewall e segurança.",
  ponto: "Ponto a ponto e interligação de redes.",
  quemsomos: "Conheça a Ideal NET na sua região.",
  fale: "Fale com a equipe comercial e suporte.",
  assine: "Solicite a assinatura de um plano Ideal NET.",
};

function palmWhatsappHref() {
  return `https://api.whatsapp.com/send?phone=${palm.whatsappPhoneParam}&text=${cfg.whatsappMessageEncoded}`;
}

/** Converte HTML de Palmácia em template com marcadores @@KEY@@ */
function palmToTemplate(html) {
  const wHref = palmWhatsappHref();
  const legacyWhatsappPhone = "55(85)99202-5109";

  const pairs = [
    [palm.centralUrl, "@@CENTRAL_URL@@"],
    [palm.email, "@@EMAIL@@"],
    [`Você está em: ${palm.titleCity}`, "@@YOU_ARE_HERE@@"],
    [palm.address, "@@ADDRESS@@"],
    [`tel: ${palm.phoneLabel.replace(/[()]/g, (m) => (m === "(" ? "(" : ")"))}`, "@@TEL_HREF_BODY@@"],
    [`tel: ${palm.phoneLabel}`, "@@TEL_HREF_BODY@@"],
  ];

  // Palmácia HTML usa "tel: (85) 99202-5109" (com espaço após dois pontos)
  const telPalmExact = `href="tel: ${palm.phoneLabel}"`;
  html = html.split(telPalmExact).join('href="@@TEL_HREF_ATTR@@"');

  for (const [needle, marker] of pairs) {
    if (needle && html.includes(needle)) html = html.split(needle).join(marker);
  }

  // WhatsApp: normalizar href antigo (55(85)...) e variante só dígitos
  html = html.split(wHref).join("@@WHATSAPP_HREF@@");
  html = html
    .split(`phone=${legacyWhatsappPhone}&text=${cfg.whatsappMessageEncoded}`)
    .join("@@WHATSAPP_PHONE_QUERY@@&text=@@WHATSAPP_TEXT@@");

  html = html.split(`<title>Ideal NET - ${palm.titleCity}</title>`).join("<title>Ideal NET - @@TITLE_CITY@@</title>");

  html = html.split(palm.facebookUrl).join("@@FACEBOOK_URL@@");
  html = html.split(palm.instagramUrl).join("@@INSTAGRAM_URL@@");

  return html;
}

function cityWhatsappHref(city) {
  return `https://api.whatsapp.com/send?phone=${city.whatsappPhoneParam}&text=${cfg.whatsappMessageEncoded}`;
}

function templateToCity(template, city) {
  let html = template;
  const wHref = cityWhatsappHref(city);
  const telAttr = city.phoneTelHref;

  const map = {
    "@@CENTRAL_URL@@": city.centralUrl,
    "@@EMAIL@@": city.email,
    "@@YOU_ARE_HERE@@": `Você está em: ${city.titleCity}`,
    "@@ADDRESS@@": city.address,
    "@@TITLE_CITY@@": city.titleCity,
    "@@WHATSAPP_HREF@@": wHref,
    "@@WHATSAPP_PHONE_QUERY@@": `phone=${city.whatsappPhoneParam}`,
    "@@WHATSAPP_TEXT@@": cfg.whatsappMessageEncoded,
    "@@FACEBOOK_URL@@": city.facebookUrl,
    "@@INSTAGRAM_URL@@": city.instagramUrl,
    "@@TEL_HREF_ATTR@@": telAttr,
  };

  // Ligue Já / labels de telefone e WhatsApp no texto (após marcadores parciais)
  html = html.split("@@PHONE_LABEL@@").join(city.phoneLabel);
  html = html.split("@@TEL_HREF_BODY@@").join(`tel:${telAttr.replace(/^tel:/, "")}`);

  for (const [marker, value] of Object.entries(map)) {
    html = html.split(marker).join(value);
  }

  // Substituir rótulos "Ligue Já" e "Whatsapp:" que ainda usam telefone Palmácia no mesmo arquivo
  if (city.id !== "palmacia") {
    html = html.split(`Ligue Já: ${palm.phoneLabel}`).join(`Ligue Já: ${city.phoneLabel}`);
    html = html.split(`Whatsapp: ${palm.phoneLabel}`).join(`Whatsapp: ${city.whatsappDisplay}`);
  }

  return html;
}

/** Após marcadores, substituir hrefs tel residuais (sem alterar linhas de WhatsApp) */
function fixResidualPhones(html, city) {
  if (city.id === "palmacia") return html;
  return html.split(palm.phoneTelHref).join(city.phoneTelHref);
}

/** Honeypot anti-spam + cidade oculta para validação no PHP */
function injectIdealnetFormFields(html, cityId, page) {
  if (page !== "fale" && page !== "assine") return html;
  const action = page === "assine" ? "assine.php" : "fale.php";
  const re = new RegExp(`(<form[^>]*action="${action}"[^>]*>)`, "i");
  const extra = `
\t\t\t\t\t\t\t\t<input type="text" name="website" value="" style="position:absolute;left:-5000px;width:1px;height:1px;overflow:hidden;" tabindex="-1" autocomplete="off" aria-hidden="true">
\t\t\t\t\t\t\t\t<input type="hidden" name="idealnet_city" value="${cityId}">`;
  if (!re.test(html)) return html;
  return html.replace(re, `$1${extra}`);
}

function injectFormFeedbackBanner(html, page) {
  if (page !== "fale" && page !== "assine") return html;
  const snippet = `<script>document.addEventListener("DOMContentLoaded",function(){var p=new URLSearchParams(location.search);var s=p.get("envio");if(!s)return;var m=document.createElement("p");m.setAttribute("role","status");m.style.cssText="text-align:center;margin:1rem auto;max-width:640px;padding:1rem;background:#e8f4fc;border-radius:8px;";m.textContent=s==="ok"?"Mensagem enviada. Em breve entraremos em contato.":s==="fail"?"Envio indisponível no momento. Utilize o WhatsApp.":"Revise os campos obrigatórios.";var form=document.querySelector('form[action$=".php"]');if(form&&form.parentNode)form.parentNode.insertBefore(m,form);});<\/script>`;
  if (!html.includes("</body>")) return html;
  return html.replace("</body>", `${snippet}\n</body>`);
}

function injectMetaDescription(html, city, page) {
  const bit = PAGE_DESC[page] ?? PAGE_DESC.index;
  const content = `Ideal NET ${city.titleCity} — ${bit}`.replace(/"/g, "&quot;");
  if (html.includes('<meta name="description" content="">')) {
    return html.replace('<meta name="description" content="">', `<meta name="description" content="${content}">`);
  }
  return html;
}

function addNoopenerOnBlankTargets(html) {
  return html.replace(/<a\s+([^>]*?)target="_blank"([^>]*)>/gi, (full, a, b) => {
    const rest = a + 'target="_blank"' + b;
    if (/rel\s*=/i.test(rest)) return full;
    return `<a ${a}target="_blank" rel="noopener noreferrer"${b}>`;
  });
}

for (const page of PAGES) {
  const srcPath = path.join(root, "cidades", "palmacia", `${page}.html`);
  if (!fs.existsSync(srcPath)) {
    console.warn("Ignorado (sem fonte):", srcPath);
    continue;
  }
  const raw = fs.readFileSync(srcPath, "utf8");
  let template = palmToTemplate(raw);

  // Marcadores para telefone em texto repetido (quando ainda não tokenizou)
  template = template.split(`Ligue Já: ${palm.phoneLabel}`).join("Ligue Já: @@PHONE_LABEL@@");
  template = template.split(`Whatsapp: ${palm.phoneLabel}`).join("Whatsapp: @@WHATSAPP_DISPLAY@@");
  template = template.split(`Whatsapp: ${palm.whatsappDisplay}`).join("Whatsapp: @@WHATSAPP_DISPLAY@@");
  if (!template.includes("@@WHATSAPP_DISPLAY@@")) {
    template = template.split(`Whatsapp: ${palm.phoneLabel}`).join("Whatsapp: @@WHATSAPP_DISPLAY@@");
  }

  for (const city of cfg.cities) {
    let html = templateToCity(template, city);
    html = html.split("@@WHATSAPP_DISPLAY@@").join(city.whatsappDisplay);
    html = fixResidualPhones(html, city);
    html = injectIdealnetFormFields(html, city.id, page);
    html = injectFormFeedbackBanner(html, page);
    html = addNoopenerOnBlankTargets(html);
    html = injectMetaDescription(html, city, page);

    const outDir = path.join(root, "cidades", city.id);
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `${page}.html`);
    fs.writeFileSync(outPath, html, "utf8");
    console.log("OK", path.relative(root, outPath));
  }
}

console.log("Build Ideal NET concluído.");
