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

  // Success case
  const successBranch =
    successChance *
    calculateAtLeast(
      diceLeft - 1,
      minSuccess - 1,
      rerollsLeft,
      successChance,
      rerollSuccessChance,
    );

  // Failure case
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

import { clamp } from '@/utils/clamp';
import { ChangeEvent, useCallback, useState } from 'react';

export default function Page() {
  const [rolls, setRolls] = useState(5);
  const [rollSuccessValue, setRollSuccessValue] = useState(6);
  const [rerolls, setRerolls] = useState(0);
  const [rerollSuccessValue, setRerollSuccessValue] = useState(6);

  const onRollsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = clamp(Number(event.target.value), 1, 5);
    setRolls(newValue);
  }, []);

  const onRollSuccessValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = clamp(Number(event.target.value), 2, 6);
      setRollSuccessValue(newValue);
    },
    [],
  );

  const onRerollsChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = clamp(Number(event.target.value), 0, 5);
      setRerolls(newValue);
    },
    [],
  );

  const onRerollSuccessValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = clamp(Number(event.target.value), 2, 6);
      setRerollSuccessValue(newValue);
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
        <fieldset>
          <fieldset role='group'>
            <label>
              Rolls
              <input
                type='number'
                min={1}
                max={5}
                value={rolls}
                onChange={onRollsChange}
              />
            </label>
            <label>
              Roll Min Success Value
              <input
                type='number'
                min={1}
                max={6}
                value={rollSuccessValue}
                onChange={onRollSuccessValueChange}
              />
            </label>
          </fieldset>

          <fieldset role='group'>
            <label>
              Rerolls
              <input
                type='number'
                min={0}
                max={5}
                value={rerolls}
                onChange={onRerollsChange}
              />
            </label>
            <label>
              Reroll Min Success Value
              <input
                type='number'
                min={1}
                max={6}
                value={rerollSuccessValue}
                onChange={onRerollSuccessValueChange}
              />
            </label>
          </fieldset>
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
