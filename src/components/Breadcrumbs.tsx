'use client';
import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const t = useTranslations('routes');
  const tb = useTranslations('breadcrumbs');

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label='breadcrumb'>
      <ol>
        <li>
          <Link href='/'>{tb('home')}</Link>
        </li>
        {segments.slice(0, -1).map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/');

          return (
            <li key={path}>
              <Link href={path}>{t(segment)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
