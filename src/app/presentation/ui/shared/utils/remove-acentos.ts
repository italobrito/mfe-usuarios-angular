export function removeAcentos(text: string): string {
  if (!text) return text;
  return text
    .normalize('NFD') // Normaliza para decompor caracteres acentuados
    .replace(/\p{Diacritic}/gu, ''); // Remove marcas diacríticas (acentos)
}