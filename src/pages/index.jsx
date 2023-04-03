import CanvasLoading from '@/components/dom/CanvasLoading'
import { CreatorsSection } from '@/components/dom/Sections/Creators'
import { GalerySection } from '@/components/dom/Sections/Galery'
import { NewsSection } from '@/components/dom/Sections/News'
import Seo from '@/components/dom/Seo'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const Pointer = dynamic(() => import('@/components/canvas/Elements/Pointer'), { ssr: false })
const Hero = dynamic(() => import('@/components/canvas/Environments/Hero'), { ssr: true })
const Sky360 = dynamic(() => import('@/components/canvas/Environments/Sky360'), { ssr: true })

export default function HomePage() {
  return (
    <>
      <Seo />

      <main
        id='hero'
        className='w-full relative aspect-[1_/_2] sm:aspect-square md:aspect-[21_/_10] 3xl:aspect-[21_/_9]'>
        <CanvasLoading src='/360-thumb.jpg' />
        <Hero>
          <Sky360 imageUrl='/3603.jpg' />
        </Hero>

        <section className='absolute inset-0 flex flex-col items-center justify-center gap-8'>
          <div className='px-5 text-center text-white md:w-1/2'>
            <h1 className='mb-4'>Passeio Cultural</h1>
            <p className='text-xl'>Viva a experiência de estar em um dos centros culturais mais incríveis do Brasil.</p>
          </div>
          <Link className='btn btn-primary btn-filled btn-xl' href='/local/pagina-interna'>
            Visitar
          </Link>
        </section>
      </main>

      <GalerySection />

      <NewsSection />

      <CreatorsSection />

      {/* <Scene preloadImage='/360-thumb.jpg'>
        <Sky360 imageUrl='/360.jpg' />
        <Pointer hAngle={345} route='/#test' />
        <Target hAngle={305} route='/quarto' />
      </Scene> */}
    </>
  )
}
