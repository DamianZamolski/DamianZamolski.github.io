import { Duration } from './Duration';

export function convertDurationToHours(duration: Duration): number {
  const { days, hours, minutes, seconds } = duration;

  return days * 24 + hours + minutes / 60 + seconds / 3600;
}
