import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../context/AuthContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    <Toaster
      position='top-center'
      gutter={8}
      toastOptions={
        { success: { duration: 3000, } }
      }
    />
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </>
}

export default MyApp
