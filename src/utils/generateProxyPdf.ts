import { jsPDF } from 'jspdf';
import { chunkArray } from './chunkArray';

export async function generateProxyPdf(opts: {
  images: ReadonlyArray<ArrayBuffer>;
  cardWidth: number;
  cardHeight: number;
  imageMimeType: 'image/png' | 'image/jpeg';
  filename: string;
}): Promise<void> {
  const { images, cardWidth, cardHeight, imageMimeType, filename } = opts;

  const pages = chunkArray(images, 9);

  const pdf = new jsPDF();
  const leftMargin = (pdf.internal.pageSize.width - 3 * cardWidth) / 2;
  const topMargin = (pdf.internal.pageSize.height - 3 * cardHeight) / 2;
  pdf.setFillColor(0, 0, 0);

  for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    const page = pages[pageIndex]!;

    for (let imageIndex = 0; imageIndex < page.length; imageIndex++) {
      const image = page[imageIndex]!;

      const blob = new Blob([image], { type: imageMimeType });

      let shouldRotate = false;

      try {
        const bitmap = await createImageBitmap(blob);
        shouldRotate = bitmap.width > bitmap.height;
      } catch (_error) {
        console.error('invalid image', { image: new Uint8Array(image) });
        continue;
      }

      const yIndex = Math.floor(imageIndex / 3);
      const xIndex = imageIndex - 3 * yIndex;

      const x = leftMargin + xIndex * cardWidth;
      const y = topMargin + yIndex * cardHeight;

      pdf.rect(x, y, cardWidth, cardHeight, 'F');

      pdf.addImage({
        imageData: new Uint8Array(image),
        x: x + (shouldRotate ? cardWidth : 0),
        y: y + (shouldRotate ? cardHeight - cardWidth : 0),
        width: shouldRotate ? cardHeight : cardWidth,
        height: shouldRotate ? cardWidth : cardHeight,
        rotation: shouldRotate ? 90 : 0,
      });
    }

    if (pageIndex < pages.length - 1) {
      pdf.addPage();
    }
  }

  pdf.save(filename);
}
