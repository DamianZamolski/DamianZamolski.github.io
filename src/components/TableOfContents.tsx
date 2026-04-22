import { getTranslations } from 'next-intl/server';
import { getDirectories } from '@/utils/getDirectories';
import { Link } from '@/i18n/navigation';

export async function TableOfContents({ url }: { url: string }) {
  const pages = getDirectories(url).filter((p) => !p.startsWith('['));
  const basePath = url.split('[locale]')[1]!.split('page')[0];
  const t = await getTranslations('routes');

  return (
    <nav aria-label='Tools'>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`${basePath}${page}`}>{t(page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
