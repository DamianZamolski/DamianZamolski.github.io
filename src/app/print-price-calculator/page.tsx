'use client';
import styles from './styles.module.css';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { estimatePrintCost } from './estimatePrintCost';
import { parseDurationString } from './parseDurationString';
import { Page } from '@/components/Page';
import type { Duration } from './Duration';

const emptyDuration: Duration = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const materialWeightAtom = atomWithStorage<number>(
  'print-price-material-weight',
  1000,
);

const materialCostPerUnitAtom = atomWithStorage<number>(
  'print-price-material-cost-per-unit',
  40,
);

const durationStringAtom = atomWithStorage<string>(
  'print-price-duration',
  '1h',
);

const hourlyRateAtom = atomWithStorage<number>('print-price-hourly-rate', 0.5);
const markupAtom = atomWithStorage<number>('print-price-markup', 100);
const currencyAtom = atomWithStorage<string>('print-price-currency', 'zł');

const currencies = ['zł', '$', '€', '£', '¥', 'CHF', 'SEK'] as const;
const prefixSymbols = new Set(['$', '€', '£', '¥']);

function formatCurrency(value: number, symbol: string): string {
  const formatted = value.toFixed(2);

  return prefixSymbols.has(symbol)
    ? `${symbol}${formatted}`
    : `${formatted} ${symbol}`;
}

export default function PrintPriceCalculatorPage() {
  const [materialWeight, setMaterialWeight] = useAtom(materialWeightAtom);

  const [materialCostPerUnit, setMaterialCostPerUnit] = useAtom(
    materialCostPerUnitAtom,
  );

  const [durationString, setDurationString] = useAtom(durationStringAtom);
  const [hourlyRate, setHourlyRate] = useAtom(hourlyRateAtom);
  const [markup, setMarkup] = useAtom(markupAtom);
  const [currency, setCurrency] = useAtom(currencyAtom);
  const [copied, setCopied] = useState(false);

  const { duration, durationError } = useMemo<{
    duration: Duration;
    durationError: string | null;
  }>(() => {
    try {
      return {
        duration: parseDurationString(durationString),
        durationError: null,
      };
    } catch (e: unknown) {
      return {
        duration: emptyDuration,
        durationError: e instanceof Error ? e.message : 'unknown error',
      };
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

  const onCopy = async () => {
    await navigator.clipboard.writeText(formatCurrency(price, currency));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Page title='Print Price Calculator'>
      <form>
        <fieldset role='group'>
          <label>
            Material weight in grams
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
        </fieldset>
        <fieldset role='group'>
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
        </fieldset>
        <fieldset role='group'>
          <label>
            Markup %
            <input
              type='number'
              min='0'
              step='any'
              value={markup}
              onChange={onNumberChange(setMarkup)}
            />
          </label>
          <label>
            Currency
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Cost</th>
            <td className={styles.right}>{formatCurrency(cost, currency)}</td>
          </tr>
          <tr>
            <th>Profit</th>
            <td className={styles.right}>{formatCurrency(profit, currency)}</td>
          </tr>
          <tr className={styles.price}>
            <th>Price</th>
            <td className={styles.right}>{formatCurrency(price, currency)}</td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={onCopy}>
        Copy price
      </button>
      {copied && <small role='status'>Copied</small>}
    </Page>
  );
}
