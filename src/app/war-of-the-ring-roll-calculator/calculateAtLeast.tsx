import { rerollFailureBranch } from './rerollFailureBranch';

export function calculateAtLeast(
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
