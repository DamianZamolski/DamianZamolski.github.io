import { Page } from './Page';
import { TableOfContents } from './TableOfContents';

export function TableOfContentsPage({
  slug,
  url,
}: {
  slug: string;
  url: string;
}) {
  return (
    <Page slug={slug}>
      <TableOfContents url={url} />
    </Page>
  );
}
