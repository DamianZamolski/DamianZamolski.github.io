import { Page } from './Page';
import { TableOfContents } from './TableOfContents';

export function TableOfContentsPage({ url }: { url: string }) {
  return (
    <Page>
      <TableOfContents url={url} />
    </Page>
  );
}
