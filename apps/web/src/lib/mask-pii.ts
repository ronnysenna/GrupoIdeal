/** Mascaramento mínimo para listagens administrativas (não é anonimização criptográfica). */

export function maskEmail(email: string): string {
  const [local, domain] = email.toLowerCase().split("@");
  if (!domain) return "***";
  const p = (local && local.length > 0) ? local.slice(0, 2) : "";
  return `${p}***@${domain}`;
}

export function maskCpfDigits(cpf: string): string {
  const d = cpf.replace(/\D/g, "");
  if (d.length < 4) return "***";
  return `***.***.***-**${d.slice(-2)}`;
}

export function maskPhone(phone: string): string {
  const d = phone.replace(/\D/g, "");
  if (d.length < 4) return "***";
  return `*** ** ***-${d.slice(-4)}`;
}

export function maskCep(cep: string): string {
  const d = cep.replace(/\D/g, "");
  if (d.length !== 8) return "***";
  return `${d.slice(0, 2)}***-**${d.slice(6)}`;
}
