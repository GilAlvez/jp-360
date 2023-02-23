import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import Seo from '@/components/dom/SEO'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <Seo />
      {Array.from({ length: 4 }).map((_, i) => (
        <Instructions key={i}>
          This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
          <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
          <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default. This is a minimal
        </Instructions>
      ))}

      <div className='absolute bottom-0 w-full bg-zinc-800 h-[500px]'>
        <Scene>
          <Logo scale={0.5} route='/blob' position-y={-1} />
        </Scene>
      </div>
    </>
  )
}
