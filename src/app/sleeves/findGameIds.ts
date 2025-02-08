export function findGameIds(text: string): Array<string> {
  return Array.from(
    new Set(
      text
        .split('\n')
        .flatMap((line) => line.split(/\s+/))
        .map((line) => /\d+/.exec(line)?.[0])
        .filter(Boolean),
    ),
  );
}
