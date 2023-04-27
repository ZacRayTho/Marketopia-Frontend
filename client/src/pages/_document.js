import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" />
      </Head>
      <body className='overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}