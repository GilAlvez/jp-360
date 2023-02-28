import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import Seo from '@/components/dom/SEO'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })
const Pointer = dynamic(() => import('@/components/canvas/Pointer'), { ssr: false })
const Sky360 = dynamic(() => import('@/components/canvas/Sky360'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <Seo />
      {/*  {Array.from({ length: 4 }).map((_, i) => (
        <Instructions key={i}>
          This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
          <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
          <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default. This is a minimal
        </Instructions>
      ))} */}

      <Scene>
        <Sky360 />
        <Pointer hAngle={345} route='/janela' />
        <Pointer hAngle={305} route='/quarto' />
      </Scene>
    </>
  )
}
