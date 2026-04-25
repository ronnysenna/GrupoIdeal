/**
 * Landing Ideal Soluções Digitais — sites, sistemas e IA.
 * Portfólio: preencha `href` quando o projeto estiver público; vazio = card informativo até publicar.
 */

export const IDEAL_SOLUCOES_DIGITAIS_CONTACT = {
  whatsappPhoneParam: "5585991904540",
  whatsappDisplay: "(85) 99190-4540",
  email: "dev@ronnysenna.com.br",
} as const;

export const IDEAL_SOLUCOES_DIGITAIS_SERVICES: {
  id: string;
  title: string;
  body: string;
  icon: "web" | "server" | "bot" | "link";
}[] = [
  {
    id: "sites",
    title: "Sites e presença web",
    body: "Landing pages, sites institucionais e vitrines otimizadas para conversão e SEO.",
    icon: "web",
  },
  {
    id: "sistemas",
    title: "Sistemas sob medida",
    body: "Plataformas web, painéis administrativos, APIs e integrações com processos do seu negócio.",
    icon: "server",
  },
  {
    id: "ia",
    title: "Agentes e IA",
    body: "Automações inteligentes, chatbots, assistentes e fluxos com modelos de linguagem — no seu domínio.",
    icon: "bot",
  },
  {
    id: "integracao",
    title: "Integrações e dados",
    body: "Conecte ERPs, CRMs, pagamentos e planilhas com pipelines seguros e observáveis.",
    icon: "link",
  },
];

const SVC_ICON: Record<
  (typeof IDEAL_SOLUCOES_DIGITAIS_SERVICES)[number]["icon"],
  string
> = {
  web: "🌐",
  server: "⚙️",
  bot: "🤖",
  link: "🔗",
};

export function solucoesDigitaisServiceIcon(
  k: (typeof IDEAL_SOLUCOES_DIGITAIS_SERVICES)[number]["icon"],
): string {
  return SVC_ICON[k];
}

export type SolucoesDigitaisPortfolioItem = {
  id: string;
  title: string;
  description: string;
  /** URL pública do projeto. Deixe `""` até publicar — o card abre só o contato. */
  href: string;
  tag?: string;
};

/**
 * Portfólio de produtos/sistemas já prontos.
 * Adicione ou remova entradas; quando `href` estiver preenchido, o card vira link.
 */
export const IDEAL_SOLUCOES_DIGITAIS_PORTFOLIO: SolucoesDigitaisPortfolioItem[] = [
  {
    id: "1",
    title: "Primeiro projeto",
    description:
      "Substitua por título e descrição reais. Cole o link do site ou demo em `href` abaixo no arquivo.",
    href: "",
    tag: "Exemplo",
  },
  {
    id: "2",
    title: "Segundo projeto",
    description: "Outro case: sistema, app web ou agente. Atualize texto e URL quando for ao ar.",
    href: "",
    tag: "Exemplo",
  },
  {
    id: "3",
    title: "Terceiro projeto",
    description: "Remova linhas que não usar ou duplique o bloco para mais cards.",
    href: "",
    tag: "Exemplo",
  },
];

export const IDEAL_SOLUCOES_DIGITAIS_FAQ: { q: string; a: string }[] = [
  {
    q: "Vocês atendem empresas fora do Ceará?",
    a: "Sim. Desenvolvimento e reuniões são majoritariamente remotos; alinhamos fuso e entregas em todo o Brasil.",
  },
  {
    q: "Como funciona um projeto com agente de IA?",
    a: "Levantamos regras de negócio, dados e integrações, escolhemos o modelo e o desenho de prompt, e entregamos com testes e documentação para evolução segura.",
  },
  {
    q: "Trabalham com stack específica?",
    a: "Preferimos tecnologias modernas (ex.: TypeScript, React, Next.js, APIs REST/GraphQL, bancos relacionais e vector DBs para IA). O stack final depende do escopo.",
  },
  {
    q: "Como pedir orçamento?",
    a: "Use o WhatsApp, o e-mail dev@ronnysenna.com.br ou o formulário desta página. Envie contexto, prazo desejado e, se houver, referências de produtos parecidos.",
  },
];
