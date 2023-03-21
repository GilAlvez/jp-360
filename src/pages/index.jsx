import dynamic from 'next/dynamic'
import Seo from '@/components/dom/SEO'
import Target from '@/components/canvas/Target'
import Hero from '@/components/canvas/Hero'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })
const Pointer = dynamic(() => import('@/components/canvas/Pointer'), { ssr: false })
const Sky360 = dynamic(() => import('@/components/canvas/Sky360'), { ssr: true })

export default function Page() {
  return (
    <>
      <Seo />

      <Hero preloadImage='/360-thumb.jpg'>
        <Sky360 imageUrl='/3603.jpg' />
      </Hero>

      {/* <Scene preloadImage='/360-thumb.jpg'>
        <Sky360 imageUrl='/360.jpg' />
        <Pointer hAngle={345} route='/#test' />
        <Target hAngle={305} route='/quarto' />
      </Scene> */}
    </>
  )
}
