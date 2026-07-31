'use client';
import { useAtom } from 'jotai';
import { type ChangeEvent, useCallback, useMemo } from 'react';
import { estimatePrintCost } from './estimatePrintCost';
import { parseDurationString } from './parseDurationString';
import { Page } from '@/components/Page';
import { CopyButton } from '@/components/CopyButton';
import type { Duration } from './Duration';
import { Form } from '@/components/Form';
import { emptyDuration } from './emptyDuration';
import { materialWeightAtom } from './materialWeightAtom';
import { materialCostPerUnitAtom } from './materialCostPerUnitAtom';
import { durationStringAtom } from './durationStringAtom';
import { hourlyRateAtom } from './hourlyRateAtom';
import { markupAtom } from './markupAtom';
import { currencyAtom } from './currencyAtom';
import { currencies } from './currencies';
import { formatCurrency } from './formatCurrency';

export default function PrintPriceCalculatorPage() {
  const [materialWeight, setMaterialWeight] = useAtom(materialWeightAtom);

  const [materialCostPerUnit, setMaterialCostPerUnit] = useAtom(
    materialCostPerUnitAtom,
  );

  const [durationString, setDurationString] = useAtom(durationStringAtom);
  const [hourlyRate, setHourlyRate] = useAtom(hourlyRateAtom);
  const [markup, setMarkup] = useAtom(markupAtom);
  const [currency, setCurrency] = useAtom(currencyAtom);

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
  const formattedPrice = formatCurrency(price, currency);

  const onNumberChange = useCallback(
    (setter: (v: number) => void) => (e: ChangeEvent<HTMLInputElement>) =>
      setter(Math.max(0, Number(e.target.value) || 0)),
    [],
  );

  return (
    <Page>
      <Form>
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
      </Form>
      <table>
        <tbody>
          <tr>
            <th>Cost</th>
            <td className='right'>{formatCurrency(cost, currency)}</td>
          </tr>
          <tr>
            <th>Profit</th>
            <td className='right'>{formatCurrency(profit, currency)}</td>
          </tr>
          <tr className='bold'>
            <th>Price</th>
            <td className='right'>{formatCurrency(price, currency)}</td>
          </tr>
        </tbody>
      </table>
      <CopyButton label='Copy price' value={formattedPrice} />
    </Page>
  );
}
