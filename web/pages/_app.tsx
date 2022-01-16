import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Footer} from "../components/layout/Footer/Footer";
import {Header} from "../components/layout/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}

export default MyApp
