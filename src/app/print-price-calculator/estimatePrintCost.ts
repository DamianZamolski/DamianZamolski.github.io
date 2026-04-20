import { convertDurationToHours } from './convertDurationToHours';
import type { Duration } from './Duration';

export function estimatePrintCost({
  materialWeight,
  materialCostPerUnit,
  duration,
  hourlyRate,
}: {
  materialWeight: number;
  materialCostPerUnit: number;
  duration: Duration;
  hourlyRate: number;
}): number {
  const materialCost = (materialWeight / 1000) * materialCostPerUnit;
  const durationCost = convertDurationToHours(duration) * hourlyRate;

  return materialCost + durationCost;
}
