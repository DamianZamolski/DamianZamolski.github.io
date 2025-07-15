import { Duration } from './Duration';
import { durationRegExp } from './durationRegExp';

export function parseDurationString(durationString: string): Duration {
  const matches = durationString.match(durationRegExp);

  if (!matches) {
    throw new Error(`Invalid duration format: ${durationString}`);
  }

  const [, d, h, m, s] = matches;

  return {
    days: d ? parseInt(d, 10) : 0,
    hours: h ? parseInt(h, 10) : 0,
    minutes: m ? parseInt(m, 10) : 0,
    seconds: s ? parseInt(s, 10) : 0,
  };
}
