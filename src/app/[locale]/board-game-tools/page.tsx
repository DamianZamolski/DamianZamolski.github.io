import { setRequestLocale } from 'next-intl/server';
import { TableOfContentsPage } from '@/components/TableOfContentsPage';

export default async function BoardGameToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TableOfContentsPage slug='board-game-tools' url={import.meta.url} />;
}
