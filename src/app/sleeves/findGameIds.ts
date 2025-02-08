export function findGameIds(text: string): Array<string> {
  return Array.from(
    new Set(
      text
        .split('\n')
        .map((line) => /\d+/.exec(line)?.[0])
        .filter(Boolean),
    ),
  );
}
