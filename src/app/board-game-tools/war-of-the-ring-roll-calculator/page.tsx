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
        <RadioGroup
          label='Rolls'
          options={[1, 2, 3, 4, 5]}
          value={rolls}
          onChange={onRollsChange}
        />
        <RadioGroup
          label='Roll Success Value'
          options={[2, 3, 4, 5, 6]}
          value={rollSuccessValue}
          onChange={setRollSuccessValue}
        />
        <RadioGroup label='Rerolls' value={rerolls} onChange={setRerolls}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Radio key={value} value={value} disabled={value > rolls} />
          ))}
        </RadioGroup>
        <RadioGroup
          label='Reroll Success Value'
          options={[2, 3, 4, 5, 6]}
          value={rerollSuccessValue}
          onChange={setRerollSuccessValue}
          disabled={rerolls === 0}
        />
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
