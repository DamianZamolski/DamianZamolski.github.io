import { createContext } from 'react';

export type RadioGroupContextValue = {
  name: string;
  selectedValue: string | number | undefined;
  onChange: (newValue: string | number) => void;
};

export const RadioGroupContext = createContext<
  RadioGroupContextValue | undefined
>(undefined);
