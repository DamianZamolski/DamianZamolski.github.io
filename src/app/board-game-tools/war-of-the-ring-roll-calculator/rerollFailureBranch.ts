import { calculateAtLeast } from './calculateAtLeast';

export function rerollFailureBranch(
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
