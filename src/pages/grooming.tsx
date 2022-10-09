import Link from '@/Link';

export default function GroomingPage() {
  return (
    <>
      <nav>
        <Link target='/'>Home</Link>
      </nav>
      <ol>
        <li>
          Face
          <ol>
            <li>Clean</li>
            <li>Serum</li>
            <li>Cream</li>
          </ol>
        </li>
      </ol>
    </>
  );
}
