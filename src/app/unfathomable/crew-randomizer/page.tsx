'use client';
import { ChangeEvent, Fragment, useCallback, useState } from 'react';

type SuccessProbabilities = Record<number, number>;

function calculateExpectedValue(
  rolls: number,
  rollSuccessValue: number,
  rerolls: number,
  rerollSuccessValue: number,
): number {
  rerolls = Math.min(rolls, rerolls);
  const noRerolls = rolls - rerolls;

  const rollSuccessChance = getSuccessChance(rollSuccessValue);
  const rerollSuccessChance = getSuccessChance(rerollSuccessValue);

  return (
    rerolls * rollSuccessChance +
    rerolls * (1 - rollSuccessChance) * rerollSuccessChance +
    noRerolls * rollSuccessChance
  );
}

function calculateAtLeastSuccessProbabilities(
  rolls: number,
  rollMinSuccessValue: number,
  rerolls: number,
  rerollMinSuccessValue: number,
): SuccessProbabilities {
  const rollSuccessChance = getSuccessChance(rollMinSuccessValue);
  const rerollSuccessChance = getSuccessChance(rerollMinSuccessValue);

  const results: SuccessProbabilities = {};

  for (let i = 1; i <= rolls; i++) {
    results[i] = calculateAtLeast(
      rolls,
      i,
      rerolls,
      rollSuccessChance,
      rerollSuccessChance,
    );
  }

  return results;
}

function calculateAtLeast(
  diceLeft: number,
  minSuccess: number,
  rerollsLeft: number,
  successChance: number,
  rerollSuccessChance: number,
): number {
  if (diceLeft === 0) return minSuccess <= 0 ? 1 : 0;
  if (minSuccess <= 0) return 1;

  const successBranch =
    successChance *
    calculateAtLeast(
      diceLeft - 1,
      minSuccess - 1,
      rerollsLeft,
      successChance,
      rerollSuccessChance,
    );

  const failureBranch =
    (1 - successChance) *
    (rerollsLeft > 0
      ? rerollFailureBranch(
          diceLeft,
          minSuccess,
          rerollsLeft,
          successChance,
          rerollSuccessChance,
        )
      : calculateAtLeast(
          diceLeft - 1,
          minSuccess,
          rerollsLeft,
          successChance,
          rerollSuccessChance,
        ));

  return successBranch + failureBranch;
}

function rerollFailureBranch(
  diceLeft: number,
  minSuccess: number,
  rerollsLeft: number,
  successChance: number,
  rerollSuccessChance: number,
): number {
  const rerollSuccessBranch =
    rerollSuccessChance *
    calculateAtLeast(
      diceLeft - 1,
      minSuccess - 1,
      rerollsLeft - 1,
      successChance,
      rerollSuccessChance,
    );

  const rerollFailureBranch =
    (1 - rerollSuccessChance) *
    calculateAtLeast(
      diceLeft - 1,
      minSuccess,
      rerollsLeft - 1,
      successChance,
      rerollSuccessChance,
    );

  return rerollSuccessBranch + rerollFailureBranch;
}

function getSuccessChance(minValue: number): number {
  return (7 - minValue) / 6;
}

export default function Page() {
  const [rolls, setRolls] = useState(5);
  const [rollSuccessValue, setRollSuccessValue] = useState(6);
  const [rerolls, setRerolls] = useState(0);
  const [rerollSuccessValue, setRerollSuccessValue] = useState(6);

  const handleRadioChange = useCallback(
    (setter: (value: number) => void) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        setter(Number(event.target.value));
      },
    [],
  );

  const expectedValue = calculateExpectedValue(
    rolls,
    rollSuccessValue,
    rerolls,
    rerollSuccessValue,
  );

  const probabilities = calculateAtLeastSuccessProbabilities(
    rolls,
    rollSuccessValue,
    rerolls,
    rerollSuccessValue,
  );

  return (
    <main>
      <header>
        <h1>War of the Ring Roll Calculator</h1>
      </header>
      <form>
        <fieldset>
          <legend># Rolls</legend>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
            <Fragment key={value}>
              <input
                id={`rolls-${value}`}
                type='radio'
                value={value}
                checked={rolls === value}
                onChange={handleRadioChange(setRolls)}
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
          <legend># Rerolls</legend>
          {Array.from({ length: 6 }, (_, i) => i).map((value) => (
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
    </main>
  );
}
