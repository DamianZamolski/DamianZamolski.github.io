import { Duration } from './Duration';
import { durationRegExp } from './durationRegExp';

export function parseDurationString(durationString: string): Duration {
  const matches = durationString.match(durationRegExp);

  if (!matches) {
    throw new Error('No matches found');
  }

  const [, days, hours, minutes, seconds] = matches;

  const result = {
    days: days ? parseInt(days, 10) : 0,
    hours: hours ? parseInt(hours, 10) : 0,
    minutes: minutes ? parseInt(minutes, 10) : 0,
    seconds: seconds ? parseInt(seconds, 10) : 0,
  };

  if (!(result.days || result.hours || result.minutes || result.seconds)) {
    throw new Error('Duration should not be zero');
  }

  return result;
}
