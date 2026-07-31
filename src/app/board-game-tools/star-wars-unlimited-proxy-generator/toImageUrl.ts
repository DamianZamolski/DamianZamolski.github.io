export function toImageUrl(imageLink: string): string {
  return `https://swudb.com/images${imageLink.replace('~', '')}`;
}
