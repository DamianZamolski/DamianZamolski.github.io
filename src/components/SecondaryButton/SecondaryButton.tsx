import { Button, type ButtonProps } from '../Button';
import css from './SecondaryButton.module.css';

export function SecondaryButton(props: ButtonProps) {
  return <Button className={css.secondaryButton} {...props} />;
}
