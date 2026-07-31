export type RadioGroupContextValue = {
  name: string;
  selectedValue: string | number | undefined;
  onChange: (newValue: string | number) => void;
};
