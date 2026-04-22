import { setRequestLocale } from 'next-intl/server';
import { TableOfContentsPage } from '@/components/TableOfContentsPage';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TableOfContentsPage slug='home' url={import.meta.url} />;
}
