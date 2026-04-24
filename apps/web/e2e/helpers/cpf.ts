/** CPF com dígitos verificadores válidos (alinhado a `isValidCpf` em @ideal/validators). */

function digit11(cpfPrefix: string, t: 9 | 10): number {
  let s = 0;
  for (let c = 0; c < t; c += 1) {
    s += parseInt(cpfPrefix[c]!, 10) * (t + 1 - c);
  }
  return ((10 * s) % 11) % 10;
}

export function randomValidCpfFormatted(): string {
  let b = "";
  for (let i = 0; i < 9; i += 1) b += String(Math.floor(Math.random() * 10));
  if (/^(\d)\1{8}$/.test(b)) b = "123456789";
  const d9 = digit11(b, 9);
  const with9 = b + d9;
  const d10 = digit11(with9, 10);
  const d = with9 + d10;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}
