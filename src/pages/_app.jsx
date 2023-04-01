import { Montserrat } from 'next/font/google'

import Footer from '@/components/dom/Footer'
import { columns } from '@/components/dom/Footer/columns'
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

      <Header hidden={pathname === '/404' && '/500'} />
      <Component {...pageProps} />
      <Footer
        hidden={pathname === '/404' && '/500'}
        shortand={false}
        logoUrl='/LogoWhite.svg'
        description='Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam lorem, sed diam nonum, lorem nonllicitud, lorem nonllicitud, lorem nonllicitud, lorem nonllicitud'
        columns={columns}
        socials={{ instagramUrl: 'https://www.instagram.com/' }}
        legals={{}}
        copyright='Copyright © 2023 '
      />
    </>
  )
}
