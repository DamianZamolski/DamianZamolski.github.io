import { TableOfContents } from './TableOfContents';

export function TableOfContentsPage({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <main>
      <header>
        <h1>{title}</h1>
      </header>
      <TableOfContents url={url} />
    </main>
  );
}
