import { Page } from '@/components/Page';

const links: Array<string> = [
  'https://revolut.me/damianzamolski',
  'https://buymeacoffee.com/damianzamolski',
  'https://www.paypal.com/paypalme/damianzamolski',
];

export default function SupportPage() {
  return (
    <Page title='Support'>
      {links.map((link) => (
        <a href={link} key={link}>
          {link}
        </a>
      ))}
    </Page>
  );
}
