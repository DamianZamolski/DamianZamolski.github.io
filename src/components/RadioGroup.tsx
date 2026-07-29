import type { ReactNode } from 'react';
import { RadioGroupContext } from './radioGroupContext';
import { Radio } from './Radio';

type RadioGroupOption = string | number;

type RadioGroupProps<T extends RadioGroupOption> = {
  label: string;
  value?: T;
  onChange: (newValue: T) => void;
  disabled?: boolean;
  children?: ReactNode;
  options?: Array<T>;
};

export function RadioGroup<T extends RadioGroupOption>({
  label,
  value,
  onChange,
  disabled,
  options,
  children,
}: RadioGroupProps<T>) {
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
        {children
          ? children
          : options?.map((option) => <Radio key={option} value={option} />)}
      </fieldset>
    </RadioGroupContext.Provider>
  );
}
