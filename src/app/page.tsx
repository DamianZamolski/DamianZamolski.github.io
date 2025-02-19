import { TableOfContentsPage } from '@/components/TableOfContentsPage';

export default function HomePage() {
  return (
    <TableOfContentsPage
      title='Damian Zamolski Website'
      url={import.meta.url}
    />
  );
}
