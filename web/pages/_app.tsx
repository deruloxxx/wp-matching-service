import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Footer} from "../components/layout/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}

export default MyApp
