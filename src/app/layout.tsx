import { Gloria_Hallelujah } from '@next/font/google';
import Script from 'next/script';

import 'styles/globals.css';

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className={gloriaHallelujah.className}>{children}</div>
        <Script src='/wired-elements.js' strategy='beforeInteractive' />
      </body>
    </html>
  );
}
