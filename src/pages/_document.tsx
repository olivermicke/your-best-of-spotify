import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

export default function Document({}: DocumentProps) {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
