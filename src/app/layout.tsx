import '@picocss/pico/css/pico.classless.green.min.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Damian Zamolski',
    template: '%s | Damian Zamolski',
  },
  description: 'Small tools for board games and 3D printing.',
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f7f2' },
    { media: '(prefers-color-scheme: dark)', color: '#11191f' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
