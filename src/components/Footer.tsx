import { BggBanner } from './BggBanner/BggBanner';

const supportLinks = [
  { label: 'revolut', href: 'https://revolut.me/damianzamolski' },
  { label: 'buymeacoffee', href: 'https://buymeacoffee.com/damianzamolski' },
  { label: 'paypal', href: 'https://www.paypal.com/paypalme/damianzamolski' },
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
