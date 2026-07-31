import type { TextAtom } from './TextAtom';
import type { BuildContext } from './BuildContext';
import type { ProxyBuild } from './ProxyBuild';

export type ProxyGeneratorConfig = {
  textAtom: TextAtom;
  cacheKey: string;
  useCors?: boolean;
  imageMimeType: 'image/png' | 'image/jpeg';
  pdfFilename: string;
  sourceName: string;
  placeholder: string;
  example: string;
  extractItems: (text: string) => Array<string>;
  buildImageLinks: (
    items: Array<string>,
    context: BuildContext,
  ) => Promise<ProxyBuild>;
};
