import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <title>Piano Studio Ruban公式ホームページ</title>
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <meta name="description" content="ピアノスタジオリュバンの公式ホームページです♪" />
        <meta property="og:url" content="https://pianostudio-ruban.com/" />
        <meta property="og:image" content='https://pianostudio-ruban.com//photo/PC2.jpg' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
