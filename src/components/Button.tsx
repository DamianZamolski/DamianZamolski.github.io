import type { ButtonProps } from './ButtonProps';

export function Button(props: ButtonProps) {
  return <button type='button' {...props} />;
}
