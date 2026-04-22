import { getSuccessChance } from './getSuccessChance';

export function calculateExpectedValue(
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
