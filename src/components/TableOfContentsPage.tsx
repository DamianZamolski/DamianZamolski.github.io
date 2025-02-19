import { Page } from './Page';
import { TableOfContents } from './TableOfContents';

export function TableOfContentsPage({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <Page title={title}>
      <TableOfContents url={url} />
    </Page>
  );
}
