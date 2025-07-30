'use client';
import styles from './styles.module.css';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { estimatePrintCost } from './estimatePrintCost';
import { parseDurationString } from './parseDurationString';
import { Page } from '@/components/Page';
import { Duration } from './Duration';

export default function PrintPriceCalculatorPage() {
  const [materialWeight, setMaterialWeight] = useState<number>(1);
  const [materialCostPerUnit, setMaterialCostPerUnit] = useState<number>(40);
  const [durationString, setDurationString] = useState<string>('1h');
  const [durationError, setDurationError] = useState<string | null>(null);
  const [hourlyRate, setHourlyRate] = useState<number>(0.5);
  const [markup, setMarkup] = useState<number>(100);

  const duration: Duration = useMemo(() => {
    try {
      const parsed = parseDurationString(durationString);
      setDurationError(null);

      return parsed;
    } catch (e: unknown) {
      setDurationError(e instanceof Error ? e.message : 'unknown error');

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [durationString]);

  const cost = estimatePrintCost({
    materialWeight,
    materialCostPerUnit,
    duration,
    hourlyRate,
  });

  const profit = (cost * markup) / 100;

  const price = cost + profit;

  const onNumberChange = useCallback(
    (setter: (v: number) => void) => (e: ChangeEvent<HTMLInputElement>) =>
      setter(Math.max(0, Number(e.target.value) || 0)),
    [],
  );

  return (
    <Page title='Print Price Calculator'>
      <form>
        <label>
          Material weight in kilograms
          <input
            type='number'
            min='0'
            step='any'
            value={materialWeight}
            onChange={onNumberChange(setMaterialWeight)}
          />
        </label>
        <label>
          Material cost per kilogram
          <input
            type='number'
            min='0'
            step='any'
            value={materialCostPerUnit}
            onChange={onNumberChange(setMaterialCostPerUnit)}
          />
        </label>
        <label>
          Print duration
          <input
            type='text'
            value={durationString}
            onChange={(e) => setDurationString(e.target.value)}
            placeholder='1d5h10m15s'
            aria-invalid={Boolean(durationError)}
            aria-describedby={durationError ? 'duration-error' : undefined}
          />
          {Boolean(durationError) && (
            <small id='duration-error'>{durationError}</small>
          )}
        </label>
        <label>
          Hourly rate
          <input
            type='number'
            min='0'
            step='any'
            value={hourlyRate}
            onChange={onNumberChange(setHourlyRate)}
          />
        </label>
        <label>
          Markup
          <input
            type='number'
            min='0'
            step='any'
            value={markup}
            onChange={onNumberChange(setMarkup)}
          />
        </label>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Cost</th>
            <td className={styles.right}>{cost.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Profit</th>
            <td className={styles.right}>{profit.toFixed(2)}</td>
          </tr>
          <tr className={styles.price}>
            <th>Price</th>
            <td className={styles.right}>{price.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}
