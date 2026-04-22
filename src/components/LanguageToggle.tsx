'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const onSelect = (next: Locale) => {
    try {
      localStorage.setItem('locale', next);
    } catch {
      // ignore
    }

    router.replace(pathname, { locale: next });
  };

  return (
    <small>
      {routing.locales.map((code, i) => (
        <span key={code}>
          {i > 0 && ' | '}
          {code === locale ? (
            <strong>{code.toUpperCase()}</strong>
          ) : (
            <a
              href={`/${code}${pathname}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(code);
              }}
            >
              {code.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </small>
  );
}
