'use client';
import { useAtom } from 'jotai';
import { cardHeightAtom, cardWidthAtom } from '@/utils/cardSizeAtoms';

export function CardSizeInputs() {
  const [cardWidth, setCardWidth] = useAtom(cardWidthAtom);
  const [cardHeight, setCardHeight] = useAtom(cardHeightAtom);

  return (
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
  );
}
