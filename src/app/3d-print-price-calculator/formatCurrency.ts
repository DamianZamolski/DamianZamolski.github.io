import { prefixSymbols } from './prefixSymbols';

export function formatCurrency(value: number, symbol: string): string {
  const formatted = value.toFixed(2);

  return prefixSymbols.has(symbol)
    ? `${symbol}${formatted}`
    : `${formatted} ${symbol}`;
}
