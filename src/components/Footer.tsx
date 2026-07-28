import Image from 'next/image';

const supportLinks = [
  { label: 'revolut', href: 'https://revolut.me/damianzamolski' },
  { label: 'buymeacoffee', href: 'https://buymeacoffee.com/damianzamolski' },
  { label: 'paypal', href: 'https://www.paypal.com/paypalme/damianzamolski' },
];

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
      <a
        className='bgg'
        href='https://boardgamegeek.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/bgg.png'
          alt='Powered by BGG'
          width={900}
          height={264}
          loading='eager'
        />
      </a>
    </footer>
  );
}
