const numbersRegExp = /\d+/g;

export function findGameIds(text: string): Array<string> {
  return Array.from(new Set(text.matchAll(numbersRegExp).map(String)));
}
