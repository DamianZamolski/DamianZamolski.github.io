'use client';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('printPrice');
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
    <Page slug='3d-print-price-calculator'>
      <form>
        <fieldset role='group'>
          <label>
            {t('materialWeight')}
            <input
              type='number'
              min='0'
              step='any'
              value={materialWeight}
              onChange={onNumberChange(setMaterialWeight)}
            />
          </label>
          <label>
            {t('materialCostPerKg')}
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
            {t('duration')}
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
            {t('hourlyRate')}
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
            {t('markup')}
            <input
              type='number'
              min='0'
              step='any'
              value={markup}
              onChange={onNumberChange(setMarkup)}
            />
          </label>
          <label>
            {t('currency')}
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
            <th>{t('cost')}</th>
            <td className='right'>{formatCurrency(cost, currency)}</td>
          </tr>
          <tr>
            <th>{t('profit')}</th>
            <td className='right'>{formatCurrency(profit, currency)}</td>
          </tr>
          <tr className='bold'>
            <th>{t('price')}</th>
            <td className='right'>{formatCurrency(price, currency)}</td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={onCopy}>
        {t('copyPrice')}
      </button>
      {copied && <small role='status'>{t('copied')}</small>}
    </Page>
  );
}
