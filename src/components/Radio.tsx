import { type ReactNode, useContext } from 'react';
import { RadioGroupContext } from './radioGroupContext';

export function Radio({
  value,
  label,
  disabled,
}: {
  value: string | number;
  label?: ReactNode;
  disabled?: boolean;
}) {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error('Radio must be used within a RadioGroup');
  }

  const { name, selectedValue, onChange } = context;
  const id = `${name}/${value}`;

  return (
    <>
      <input
        id={id}
        type='radio'
        name={name}
        checked={value === selectedValue}
        disabled={disabled}
        onChange={() => onChange(value)}
      />
      <label htmlFor={id}>{label ?? String(value)}</label>
    </>
  );
}
