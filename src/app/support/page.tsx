import { Page } from '@/components/Page';

const links: Array<string> = [
  'https://revolut.me/damianzamolski',
  'https://buymeacoffee.com/damianzamolski',
  'https://www.paypal.com/paypalme/damianzamolski',
];

export default function SupportPage() {
  return (
    <Page title='Support'>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </Page>
  );
}
