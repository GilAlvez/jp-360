import CanvasLoading from '@/components/dom/CanvasLoading'
import Seo from '@/components/dom/Seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const Sky360 = dynamic(() => import('@/components/canvas/Environments/Sky360'), { ssr: true })

const Target = dynamic(() => import('@/components/canvas/Elements/Target'), { ssr: false })

export default function LocalPage() {
  const route = useRouter()
  return (
    <>
      <Seo />

      <main
        id='local'
        className='w-full relative aspect-[1_/_2] sm:aspect-square md:aspect-[21_/_10] 3xl:aspect-[21_/_9]'>
        <CanvasLoading src='/360-thumb.jpg' />
        <Scene preloadImage='/360-thumb.jpg'>
          <Sky360 imageUrl='/360.jpg' />
          <Target hAngle={305} route={`/local/${route.query.local}/item/item-qualquer`} />
        </Scene>
      </main>
    </>
  )
}
