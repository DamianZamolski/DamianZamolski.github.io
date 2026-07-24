import type { ReactNode } from 'react';

export function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (newValue: boolean) => void;
  children: ReactNode;
}) {
  return (
    <label>
      <input
        type='checkbox'
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      {children}
    </label>
  );
}
