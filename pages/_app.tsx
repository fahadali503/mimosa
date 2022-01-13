import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossOrigin="anonymous"
      />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
