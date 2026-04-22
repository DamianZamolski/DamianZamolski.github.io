import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';

const supportLinks = [
  { label: 'revolut', href: 'https://revolut.me/damianzamolski' },
  { label: 'buymeacoffee', href: 'https://buymeacoffee.com/damianzamolski' },
  { label: 'paypal', href: 'https://www.paypal.com/paypalme/damianzamolski' },
];

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer>
      <small>
        {t('supportMe')}{' '}
        {supportLinks.map((link, i) => (
          <span key={link.href}>
            {i > 0 && ' · '}
            <a href={link.href} target='_blank' rel='noopener noreferrer'>
              {link.label}
            </a>
          </span>
        ))}
      </small>
      <LanguageToggle />
    </footer>
  );
}
