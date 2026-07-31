import type { ProxyGeneratorConfig } from '@/components/ProxyGeneratorConfig';
import { textAtom } from './textAtom';
import { deckLinkRegExp } from './deckLinkRegExp';
import { buildImageLinks } from './buildImageLinks';

export const config: ProxyGeneratorConfig = {
  textAtom,
  cacheKey: 'arkham-json',
  imageMimeType: 'image/jpeg',
  pdfFilename: 'arkham-proxies.pdf',
  sourceName: 'ArkhamDB',
  placeholder:
    'Paste ArkhamDB deck URLs here. Separate them with spaces or enters.',
  example: 'e.g. https://arkhamdb.com/deck/view/123456',
  extractItems: (text) =>
    [...text.matchAll(deckLinkRegExp)].map((match) => match[1]!),
  buildImageLinks,
};
