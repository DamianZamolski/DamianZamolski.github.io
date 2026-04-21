'use client';
import { useAtom } from 'jotai';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom, type PaperSize } from '@/utils/paperSizeAtom';

export function PrintSettings() {
  const [cardWidth, setCardWidth] = useAtom(cardWidthAtom);
  const [cardHeight, setCardHeight] = useAtom(cardHeightAtom);
  const [paperSize, setPaperSize] = useAtom(paperSizeAtom);

  return (
    <>
      <label>
        Paper size
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
          Card width (mm)
          <input
            type='number'
            min={10}
            step={1}
            value={cardWidth}
            onChange={(event) => setCardWidth(event.target.valueAsNumber)}
          />
        </label>
        <label>
          Card height (mm)
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
