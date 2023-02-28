import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import Seo from '@/components/dom/SEO'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })
const Pointer = dynamic(() => import('@/components/canvas/Pointer'), { ssr: false })
const Sky360 = dynamic(() => import('@/components/canvas/Sky360'), { ssr: true })

export default function Page() {
  return (
    <>
      <Seo />

      <Scene preloadImage='/360-thumb.jpg'>
        <Sky360 imageUrl='/360.jpg' />
        <Pointer hAngle={345} route='/#test' />
        <Pointer hAngle={305} route='/quarto' />
      </Scene>

      <Instructions id='test'>
        This project uses Nextjs + React-three-fiber and Threejs. Click on the{' '}
        <span className='font-bold text-cyan-200'>white pointer</span> to navigate to the{' '}
        <span className='font-bold text-green-200'>/[dynamic-route]</span> page.
      </Instructions>
    </>
  )
}
