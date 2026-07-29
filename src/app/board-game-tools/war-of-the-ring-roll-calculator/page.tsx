'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { calculateExpectedValue } from './calculateExpectedValue';
import { calculateAtLeastSuccessProbabilities } from './calculateAtLeastSuccessProbabilities';
import type { SuccessProbabilities } from './SuccessProbabilities';
import { Page } from '@/components/Page';
import { Form } from '@/components/Form';
import { RadioGroup } from '@/components/RadioGroup';
import { Radio } from '@/components/Radio';

const rollsAtom = atomWithStorage<number>('wotr-rolls', 5);

const rollSuccessValueAtom = atomWithStorage<number>(
  'wotr-roll-success-value',
  6,
);

const rerollsAtom = atomWithStorage<number>('wotr-rerolls', 0);

const rerollSuccessValueAtom = atomWithStorage<number>(
  'wotr-reroll-success-value',
  6,
);

export default function WarOfTheRingRollCalculatorPage() {
  const [rolls, setRolls] = useAtom(rollsAtom);
  const [rollSuccessValue, setRollSuccessValue] = useAtom(rollSuccessValueAtom);
  const [rerolls, setRerolls] = useAtom(rerollsAtom);

  const [rerollSuccessValue, setRerollSuccessValue] = useAtom(
    rerollSuccessValueAtom,
  );

  const expectedValue: number = useMemo(
    () =>
      calculateExpectedValue(
        rolls,
        rollSuccessValue,
        rerolls,
        rerollSuccessValue,
      ),
    [rerollSuccessValue, rerolls, rollSuccessValue, rolls],
  );

  const probabilities: SuccessProbabilities = useMemo(
    () =>
      calculateAtLeastSuccessProbabilities(
        rolls,
        rollSuccessValue,
        rerolls,
        rerollSuccessValue,
      ),
    [rerollSuccessValue, rerolls, rollSuccessValue, rolls],
  );

  const onRollsChange = useCallback(
    (newValue: number) => {
      setRolls(newValue);

      if (newValue < rerolls) {
        setRerolls(newValue);
      }
    },
    [rerolls, setRolls, setRerolls],
  );

  return (
    <Page>
      <Form>
        <RadioGroup label='Rolls' value={rolls} onChange={onRollsChange}>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
            <Radio key={value} value={value} />
          ))}
        </RadioGroup>
        <RadioGroup
          label='Roll Success Value'
          value={rollSuccessValue}
          onChange={setRollSuccessValue}
        >
          {Array.from({ length: 5 }, (_, i) => i + 2).map((value) => (
            <Radio key={value} value={value} />
          ))}
        </RadioGroup>
        <RadioGroup label='Rerolls' value={rerolls} onChange={setRerolls}>
          {Array.from({ length: 6 }, (_, i) => i).map((value) => (
            <Radio key={value} value={value} disabled={value > rolls} />
          ))}
        </RadioGroup>
        <RadioGroup
          label='Reroll Success Value'
          value={rerollSuccessValue}
          onChange={setRerollSuccessValue}
          disabled={rerolls === 0}
        >
          {Array.from({ length: 5 }, (_, i) => i + 2).map((value) => (
            <Radio key={value} value={value} />
          ))}
        </RadioGroup>
      </Form>
      {Object.keys(probabilities).length > 0 && (
        <>
          <p>
            Expected value: <strong>{expectedValue.toFixed(2)}</strong>
          </p>
          <table>
            <thead>
              <tr>
                <th scope='col'>Successes</th>
                <th scope='col'>Probability</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(probabilities).map(([successes, probability]) => (
                <tr key={successes}>
                  <th scope='row'>{successes}</th>
                  <td>
                    <span className='probability'>
                      {(probability * 100).toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Page>
  );
}
