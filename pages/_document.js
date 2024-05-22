import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <title>Piano Studio Ruban公式ホームページ</title>
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <meta name="description" content="ピアニストスタジオリュバンの公式ホームページです♪" />
        <meta property="og:url" content="https://rina-akaboshi.com/" />
        <meta property="og:image" content='https://rina-akaboshi.com/photo/biography.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
