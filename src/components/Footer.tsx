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
        className='bgg-badge'
        href='https://boardgamegeek.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/bgg.png' alt='Powered by BGG' />
      </a>
    </footer>
  );
}
