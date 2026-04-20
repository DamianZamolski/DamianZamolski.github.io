import { TableOfContentsPage } from '@/components/TableOfContentsPage';

export default function HomePage() {
  return (
    <TableOfContentsPage
      title="Damian Zamolski's Website"
      url={import.meta.url}
    />
  );
}
