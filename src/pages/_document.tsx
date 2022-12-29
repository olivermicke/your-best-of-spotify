import { DocumentProps, Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document({}: DocumentProps) {
  return (
    <Html lang='en'>
      <Head>
        <title>Your best of Spotify</title>
      </Head>
      <body>
        <Main />
        <Script src='/wired-elements.js' strategy='beforeInteractive' />
        <NextScript />
      </body>
    </Html>
  );
}
