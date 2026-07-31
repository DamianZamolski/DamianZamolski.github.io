import type { ProxyGeneratorConfig } from '@/components/ProxyGeneratorConfig';
import { textAtom } from './textAtom';
import { deckLinkRegExp } from './deckLinkRegExp';
import { buildImageLinks } from './buildImageLinks';

export const config: ProxyGeneratorConfig = {
  textAtom,
  cacheKey: 'swu-json',
  useCors: true,
  imageMimeType: 'image/png',
  pdfFilename: 'star-wars-unlimited-proxies.pdf',
  sourceName: 'SWUDB',
  placeholder: 'Paste SWUDB URLs here. Separate them with spaces or enters.',
  example: 'e.g. https://swudb.com/deck/abc123',
  extractItems: (text) =>
    text.match(deckLinkRegExp)?.map((url) => url.trim()) ?? [],
  buildImageLinks,
};
