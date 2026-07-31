import type { ComponentPropsWithoutRef } from 'react';

export function Group(props: Omit<ComponentPropsWithoutRef<'div'>, 'role'>) {
  return <div role='group' {...props} />;
}
