import '@picocss/pico/css/pico.classless.green.min.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Damian Zamolski',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
