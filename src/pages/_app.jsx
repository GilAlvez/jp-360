import { Montserrat } from 'next/font/google'

import Footer from '@/components/dom/Footer'
import { columns } from '@/components/dom/Footer/columns'
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
      <Footer
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
