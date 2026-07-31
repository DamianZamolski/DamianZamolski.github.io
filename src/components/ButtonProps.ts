import type { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'type'>;
