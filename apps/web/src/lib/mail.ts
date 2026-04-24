import { render } from "@react-email/render";
import { NovoCadastroEmail, type NovoCadastroData } from "@ideal/emails";
import nodemailer from "nodemailer";

type MailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
};

function getConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;
  const port = Number(process.env.SMTP_PORT ?? "587");
  if (!host || !user || !pass || !from || !to) {
    return null;
  }
  return { host, port, user, pass, from, to };
}

export async function sendNovoCadastro(data: NovoCadastroData): Promise<boolean> {
  const cfg = getConfig();
  if (!cfg) {
    console.warn("[mail] Variáveis SMTP ou MAIL_* ausentes. E-mail não enviado.");
    return false;
  }

  const transport = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.port === 465,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const html = await render(NovoCadastroEmail({ data }));
  const subject = `Novo cadastro de cliente - ${data.cityLabel}`;

  try {
    await transport.sendMail({
      from: cfg.from,
      to: cfg.to,
      subject,
      html,
    });
    return true;
  } catch (e) {
    console.error("[mail] Erro ao enviar:", e);
    return false;
  }
}
