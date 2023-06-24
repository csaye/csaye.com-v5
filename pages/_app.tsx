import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Cooper Saye</title>
        <link rel='icon' href='/favicons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='canonical' href='https://csaye.com' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
