import { Gloria_Hallelujah } from '@next/font/google';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={gloriaHallelujah.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
