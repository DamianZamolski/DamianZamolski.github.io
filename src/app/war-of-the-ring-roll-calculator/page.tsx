'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { type ChangeEvent, Fragment, useCallback, useMemo } from 'react';
import { calculateExpectedValue } from './calculateExpectedValue';
import { calculateAtLeastSuccessProbabilities } from './calculateAtLeastSuccessProbabilities';
import type { SuccessProbabilities } from './SuccessProbabilities';
import { Page } from '@/components/Page';
import styles from './page.module.css';

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
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      setRolls(newValue);

      if (newValue < rerolls) {
        setRerolls(newValue);
      }
    },
    [rerolls, setRolls, setRerolls],
  );

  const handleRadioChange = useCallback(
    (setter: (value: number) => void) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        setter(Number(event.target.value));
      },
    [],
  );

  return (
    <Page title='War of the Ring Roll Calculator'>
      <form>
        <fieldset>
          <legend>Rolls</legend>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
            <Fragment key={value}>
              <input
                id={`rolls-${value}`}
                type='radio'
                value={value}
                checked={rolls === value}
                onChange={onRollsChange}
              />
              <label htmlFor={`rolls-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Roll Success Value</legend>
          {Array.from({ length: 5 }, (_, i) => i + 2).map((value) => (
            <Fragment key={value}>
              <input
                id={`roll-success-${value}`}
                type='radio'
                value={value}
                checked={rollSuccessValue === value}
                onChange={handleRadioChange(setRollSuccessValue)}
              />
              <label htmlFor={`roll-success-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Rerolls</legend>
          {Array.from({ length: 6 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`rerolls-${value}`}
                type='radio'
                value={value}
                checked={rerolls === value}
                onChange={handleRadioChange(setRerolls)}
                disabled={value > rolls}
              />
              <label htmlFor={`rerolls-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset disabled={rerolls === 0}>
          <legend>Reroll Success Value</legend>
          {Array.from({ length: 5 }, (_, i) => i + 2).map((value) => (
            <Fragment key={value}>
              <input
                id={`reroll-success-${value}`}
                type='radio'
                value={value}
                checked={rerollSuccessValue === value}
                onChange={handleRadioChange(setRerollSuccessValue)}
              />
              <label htmlFor={`reroll-success-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
      </form>
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
                    <span className={styles.probability}>
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
