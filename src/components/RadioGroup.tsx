import type { ReactNode } from 'react';
import { RadioGroupContext } from './radioGroupContext';

export function RadioGroup<T extends string | number>({
  label,
  value,
  onChange,
  disabled,
  children,
}: {
  label: string;
  value?: T;
  onChange: (newValue: T) => void;
  disabled?: boolean;
  children: ReactNode;
}) {
  const name = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <RadioGroupContext.Provider
      value={{
        name,
        selectedValue: value,
        onChange: (newValue) => onChange(newValue as T),
      }}
    >
      <fieldset disabled={disabled}>
        <legend>{label}</legend>
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
}
