import { Montserrat } from 'next/font/google'

import Footer from '@/components/dom/Footer'
import Header from '@/components/dom/Header'
import '@/styles/index.scss'
import { useRouter } from 'next/router'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter()

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <div className='flex flex-col min-h-screen'>
        <Header hidden={pathname === '/404' && '/500'} float={pathname === '/'} />
        <Component {...pageProps} />
        <Footer hidden={pathname === '/404' && '/500'} short={pathname.includes('item')} />
      </div>
    </>
  )
}
