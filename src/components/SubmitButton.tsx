import type { ComponentPropsWithoutRef } from 'react';

export function SubmitButton(
  props: Omit<ComponentPropsWithoutRef<'button'>, 'type'>,
) {
  return <button type='submit' {...props} />;
}
