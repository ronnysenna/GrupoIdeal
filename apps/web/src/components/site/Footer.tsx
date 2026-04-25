import Link from "next/link";
import {
  HUB_BRANDS,
  HUB_EMAIL,
  HUB_PHONE_DISPLAY,
  HUB_PHONE_TEL,
  HUB_PHONE_WA,
  IDEAL_NET_FILIAIS,
  RASTREAMENTO_ADDRESS,
  RASTREAMENTO_EMAIL,
  RASTREAMENTO_PHONE_DISPLAY,
  RASTREAMENTO_WHATSAPP_PARAM,
} from "@/content/hub";
import { buildWhatsAppUrl, getTeralink, telHref } from "@/lib/site-config";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./hub/icons";

type FooterProps = {
  variant: "hub" | "simple";
};

export function SiteFooter({ variant }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer className="mt-auto border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        <p>Ideal Soluções — conectando pessoas e empresas com tecnologia de ponta.</p>
      </footer>
    );
  }

  const year = new Date().getFullYear();
  const whatsHref = buildWhatsAppUrl({
    phone: HUB_PHONE_WA,
    message: "Olá! Vim pelo site do Grupo Ideal.",
  });

  const teralink = getTeralink();
  const teralinkContact = teralink.contact;
  const teralinkWhatsHref = buildWhatsAppUrl({
    phone: teralinkContact.whatsappPhoneParam,
    message: `Olá! Vim pelo site do Grupo Ideal e gostaria de informações sobre ${teralink.label}.`,
  });
  const rastreamentoWhatsHref = buildWhatsAppUrl({
    phone: RASTREAMENTO_WHATSAPP_PARAM,
    message:
      "Olá! Vim pelo site do Grupo Ideal (Ideal Rastreamento) e gostaria de mais informações.",
  });

  return (
    <footer className="border-t border-white/10 bg-[#070b17] text-sm text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-white">Grupo Ideal</p>
          <p className="mt-3 max-w-xs text-zinc-400">
            Um ecossistema de tecnologia para conectar, monitorar e digitalizar o seu
            negócio.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={whatsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={telHref(HUB_PHONE_TEL)}
              aria-label={`Ligar para ${HUB_PHONE_DISPLAY}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/5"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${HUB_EMAIL}`}
              aria-label={`Enviar e-mail para ${HUB_EMAIL}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/5"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold text-white">Empresas</p>
          <ul className="mt-4 space-y-2">
            {HUB_BRANDS.map((b) =>
              b.external ? (
                <li key={b.id}>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white"
                  >
                    {b.name}
                  </a>
                </li>
              ) : (
                <li key={b.id}>
                  <Link href={b.href} className="text-zinc-300 hover:text-white">
                    {b.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="text-base font-semibold text-white">Atendimento</p>
          <p className="mt-2 text-xs text-zinc-500">
            Comercial, Teralink, Rastreamento e filiais têm contatos no bloco
            abaixo.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="text-xs uppercase tracking-wide text-zinc-500">
                Comercial (Grupo)
              </span>
            </li>
            <li>
              <a
                href={telHref(HUB_PHONE_TEL)}
                className="text-zinc-300 hover:text-white"
              >
                {HUB_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${HUB_EMAIL}`}
                className="text-zinc-300 hover:text-white"
              >
                {HUB_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base font-semibold text-white">Onde estamos</p>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Interior do CE: Palmácia, Pacoti, Ibicuitinga (Ideal NET)</li>
            <li>Fortaleza – CE (Teralink Fibra)</li>
            <li>{RASTREAMENTO_ADDRESS} (Ideal Rastreamento)</li>
            <li>Atendimento nacional (rastreamento e soluções digitais)</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-sm font-semibold text-white">
            Filiais e unidades — contatos
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            WhatsApp, e-mail e endereço. Mesmo padrão para Ideal NET, Teralink e
            Rastreamento.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IDEAL_NET_FILIAIS.map((f) => {
              const wa = buildWhatsAppUrl({
                phone: f.whatsappPhoneParam,
                message: `Olá! Vim pelo site do Grupo Ideal e gostaria de falar com a unidade de ${f.cityLabel}.`,
              });
              return (
                <li
                  key={f.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-sm font-semibold text-white">{f.cityLabel}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {f.address}
                  </p>
                  <p className="mt-2">
                    <a
                      href={`mailto:${f.email}`}
                      className="text-sm text-blue-300 hover:text-blue-200"
                    >
                      {f.email}
                    </a>
                  </p>
                  <p className="mt-1">
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-300 hover:text-emerald-200"
                    >
                      WhatsApp {f.whatsappDisplay}
                    </a>
                  </p>
                </li>
              );
            })}

            <li className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-sm font-semibold text-white">Teralink Fibra</p>
              <p className="text-xs text-zinc-500">Fortaleza – CE</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {teralinkContact.address}
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${teralinkContact.email}`}
                  className="text-sm text-blue-300 hover:text-blue-200"
                >
                  {teralinkContact.email}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={teralinkWhatsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-300 hover:text-emerald-200"
                >
                  WhatsApp {teralinkContact.whatsappDisplay}
                </a>
              </p>
            </li>

            <li className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-sm font-semibold text-white">Ideal Rastreamento</p>
              <p className="text-xs text-zinc-500">Atendimento nacional</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {RASTREAMENTO_ADDRESS}
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${RASTREAMENTO_EMAIL}`}
                  className="text-sm text-blue-300 hover:text-blue-200"
                >
                  {RASTREAMENTO_EMAIL}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={rastreamentoWhatsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-300 hover:text-emerald-200"
                >
                  WhatsApp {RASTREAMENTO_PHONE_DISPLAY}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:px-6">
          <p>© {year} Grupo Ideal. Todos os direitos reservados.</p>
          <p>Conectando pessoas e empresas com tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
}
