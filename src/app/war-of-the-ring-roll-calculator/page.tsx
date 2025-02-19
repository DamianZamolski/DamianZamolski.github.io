'use client';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import { calculateExpectedValue } from './calculateExpectedValue';
import { calculateAtLeastSuccessProbabilities } from './calculateAtLeastSuccessProbabilities';
import { SuccessProbabilities } from './SuccessProbabilities';
import { Page } from '@/components/Page';

export default function WarOfTheRingRollCalculatorPage() {
  const [rolls, setRolls] = useState(5);
  const [rollSuccessValue, setRollSuccessValue] = useState(6);
  const [rerolls, setRerolls] = useState(0);
  const [rerollSuccessValue, setRerollSuccessValue] = useState(6);

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
    [rerolls],
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
          {Array.from({ length: rolls + 1 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`rerolls-${value}`}
                type='radio'
                value={value}
                checked={rerolls === value}
                onChange={handleRadioChange(setRerolls)}
              />
              <label htmlFor={`rerolls-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
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
        <table>
          <thead>
            <tr>
              <th>Expected Value</th>
              <th>{expectedValue.toFixed(2)}</th>
            </tr>
            <tr>
              <th>Successes</th>
              <th>Probability</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(probabilities).map(([successes, probability]) => (
              <tr key={successes}>
                <td>{successes}</td>
                <td>{(probability * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Page>
  );
}
