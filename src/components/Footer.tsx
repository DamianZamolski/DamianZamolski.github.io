import { BggBanner } from './BggBanner/BggBanner';

const supportLinks = [
  { label: 'Revolut', href: 'https://revolut.me/damianzamolski' },
  { label: 'PayPal', href: 'https://www.paypal.com/paypalme/damianzamolski' },
  { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/damianzamolski' },
] as const;

export function Footer() {
  return (
    <footer>
      <small>
        Support me:{' '}
        {supportLinks.map((link, i) => (
          <span key={link.href}>
            {i > 0 && ' · '}
            <a href={link.href} target='_blank' rel='noopener noreferrer'>
              {link.label}
            </a>
          </span>
        ))}
      </small>
      <BggBanner />
    </footer>
  );
}
