import Page from '@/Page';
import Heading from '@/Heading';
import Link from '@/Link';

export default function HomePage() {
  return (
    <Page title='Damian Zamolski'>
      <Heading>Damian Zamolski</Heading>
      <nav>
        <ul>
          <li>
            <Link target='software'>Software</Link>
          </li>
          <li>
            <Link target='grooming'>Grooming</Link>
          </li>
          <li>
            <Link target='smoothie'>Smoothie</Link>
          </li>
        </ul>
      </nav>
    </Page>
  );
}
