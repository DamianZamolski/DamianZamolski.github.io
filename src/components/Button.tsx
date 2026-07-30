import type { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'type'>;

export function Button(props: ButtonProps) {
  return <button type='button' {...props} />;
}
