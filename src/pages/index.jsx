import Seo from '@/components/dom/Seo'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const Pointer = dynamic(() => import('@/components/canvas/Elements/Pointer'), { ssr: false })
const Hero = dynamic(() => import('@/components/canvas/Environments/Hero'), { ssr: true })
const Sky360 = dynamic(() => import('@/components/canvas/Environments/Sky360'), { ssr: true })

export default function Page() {
  return (
    <>
      <Seo />

      <Hero preloadImage='/360-thumb.jpg'>
        <Sky360 imageUrl='/3603.jpg' />
      </Hero>

      <div className='h-[80rem] bg-stone-50'></div>

      {/* <Scene preloadImage='/360-thumb.jpg'>
        <Sky360 imageUrl='/360.jpg' />
        <Pointer hAngle={345} route='/#test' />
        <Target hAngle={305} route='/quarto' />
      </Scene> */}
    </>
  )
}
