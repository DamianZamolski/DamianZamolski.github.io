import { getSuccessChance } from './getSuccessChance';
import { calculateAtLeast } from './calculateAtLeast';
import { SuccessProbabilities } from './SuccessProbabilities';

export function calculateAtLeastSuccessProbabilities(
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
