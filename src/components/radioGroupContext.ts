import { createContext } from 'react';
import type { RadioGroupContextValue } from './RadioGroupContextValue';

export const RadioGroupContext = createContext<
  RadioGroupContextValue | undefined
>(undefined);
