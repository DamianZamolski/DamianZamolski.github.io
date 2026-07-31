import { Button } from '../Button';
import type { ButtonProps } from '../ButtonProps';
import css from './SecondaryButton.module.css';

export function SecondaryButton(props: ButtonProps) {
  return <Button className={css.secondaryButton} {...props} />;
}
