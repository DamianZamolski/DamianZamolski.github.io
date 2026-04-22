const bggUrlRegExp =
  /(?:www\.)?boardgamegeek\.com\/(?:boardgame|boardgameexpansion)\/(\d+)/g;

export function findGameIds(text: string): Array<string> {
  return Array.from(text.matchAll(bggUrlRegExp), (match) => match[1]!);
}
