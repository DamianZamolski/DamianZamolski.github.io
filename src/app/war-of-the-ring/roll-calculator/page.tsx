'use client';

type SuccessProbabilities = Record<number, number>;

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
  if (diceLeft === 0) return minSuccess <= 0 ? 1 : 0; // No dice left: success depends on minSuccess
  if (minSuccess <= 0) return 1; // Already achieved required successes

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

import { ChangeEvent, useCallback, useState } from 'react';

export default function Page() {
  const [rolls, setRolls] = useState(5);
  const [rollSuccessValue, setRollSuccessValue] = useState(6);
  const [rerolls, setRerolls] = useState(0);
  const [rerollSuccessValue, setRerollSuccessValue] = useState(6);

  const handleSelectChange = useCallback(
    (setter: (value: number) => void) =>
      (event: ChangeEvent<HTMLSelectElement>) => {
        setter(Number(event.target.value));
      },
    [],
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
        <fieldset role='group'>
          <label>
            Rolls
            <select value={rolls} onChange={handleSelectChange(setRolls)}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label>
            Roll Min Success Value
            <select
              value={rollSuccessValue}
              onChange={handleSelectChange(setRollSuccessValue)}
            >
              {Array.from({ length: 5 }, (_, i) => i + 2).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <fieldset role='group'>
          <label>
            Rerolls
            <select value={rerolls} onChange={handleSelectChange(setRerolls)}>
              {Array.from({ length: 6 }, (_, i) => i).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label>
            Reroll Min Success Value
            <select
              value={rerollSuccessValue}
              onChange={handleSelectChange(setRerollSuccessValue)}
            >
              {Array.from({ length: 5 }, (_, i) => i + 2).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      </form>
      {Object.keys(probabilities).length > 0 && (
        <table>
          <thead>
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
