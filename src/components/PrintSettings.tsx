'use client';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom, type PaperSize } from '@/utils/paperSizeAtom';

export function PrintSettings() {
  const t = useTranslations('printSettings');
  const [cardWidth, setCardWidth] = useAtom(cardWidthAtom);
  const [cardHeight, setCardHeight] = useAtom(cardHeightAtom);
  const [paperSize, setPaperSize] = useAtom(paperSizeAtom);

  return (
    <>
      <label>
        {t('paperSize')}
        <select
          value={paperSize}
          onChange={(event) => setPaperSize(event.target.value as PaperSize)}
        >
          <option value='a4'>A4</option>
          <option value='letter'>Letter</option>
        </select>
      </label>
      <fieldset role='group'>
        <label>
          {t('cardWidth')}
          <input
            type='number'
            min={10}
            step={1}
            value={cardWidth}
            onChange={(event) => setCardWidth(event.target.valueAsNumber)}
          />
        </label>
        <label>
          {t('cardHeight')}
          <input
            type='number'
            min={10}
            step={1}
            value={cardHeight}
            onChange={(event) => setCardHeight(event.target.valueAsNumber)}
          />
        </label>
      </fieldset>
    </>
  );
}
