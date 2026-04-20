import { convertDurationToHours } from './convertDurationToHours';
import { Duration } from './Duration';

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
  const materialCost = materialWeight * materialCostPerUnit;
  const durationCost = convertDurationToHours(duration) * hourlyRate;

  return materialCost + durationCost;
}
