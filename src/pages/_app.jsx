import { Montserrat } from 'next/font/google'

import Header from '@/components/dom/Header'
import '@/styles/index.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
