import Seo from '@/components/dom/Seo'
import { useRouter } from 'next/router'

// const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
// const Sky360 = dynamic(() => import('@/components/canvas/Environments/Sky360'), { ssr: true })
// const Target = dynamic(() => import('@/components/canvas/Elements/Target'), { ssr: false })

export default function ItemPage() {
  const route = useRouter()
  return (
    <>
      <Seo />

      <main className='app-container'>Página Dinamica do Item Clicado: {`{${route.query.item}}`}</main>
    </>
  )
}
