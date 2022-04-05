import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta property="og:title" content="Spotify Lookin' Fly"/>
        <meta name="author" content="Mike Stagg" />
        <meta property="og:description" content="This is a Spotify Clone"/>
        <meta property="og:url" content="https://spotify-2-reproduction.vercel.app"/>
        <meta name="image" property="og:image" content="https://links.papareact.com/9xl"/>
      </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}