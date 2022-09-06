import Link from '@/Link';
import Section from '@/Section';

export default function HomePage() {
  return (
    <Section heading='Damian Zamolski'>
      <nav>
        <ul>
          <li>
            <Link target='smoothie'>Smoothie</Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
}
