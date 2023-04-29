import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import CanvasLoading from '@/components/dom/CanvasLoading'
import { EnvironmentCard } from '@/components/dom/Cards/Environments'
import Seo from '@/components/dom/Seo'
import { locations } from '@/data/locations'
import { useRenderPointers } from '@/hooks/useRenderPointers'
import { useRenderRichText } from '@/hooks/useRenderRichText'

import { ArrowLeft } from 'phosphor-react'
import { useEffect, useState } from 'react'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const Sky360 = dynamic(() => import('@/components/canvas/Environments/Sky360'), { ssr: true })

export default function LocalPage() {
  const router = useRouter()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (router.query.location) {
      setLocation(locations.find((loc) => loc.slug === router.query.location))
    }
  }, [router.query.location])

  const pointers = useRenderPointers(location?.pointers)
  const richText = useRenderRichText(location?.richText)

  return (
    <>
      <Seo />

      <main
        id='local'
        className='w-full max-h-[calc(100vh_-_7rem)] select-none relative aspect-[1_/_2] sm:aspect-square md:aspect-[21_/_10] 3xl:aspect-[21_/_9]'>
        <div
          onClick={() => router.back()}
          className='absolute z-10 flex items-center gap-1 p-2 pl-4 transition rounded-r-full group md:p-3 md:pl-6 top-3 md:top-6 w-fit hover:bg-stone-300 bg-black/20'>
          <ArrowLeft size={20} weight='regular' className='text-stone-200 group-hover:text-stone-900' />
          <p className='leading-none text-stone-200 group-hover:text-stone-900'>Voltar</p>
        </div>
        <CanvasLoading src={location?.environment360.previewImage} />
        <Scene type='environment'>
          <Sky360 imageUrl={location?.environment360.url} />
          {pointers}
        </Scene>
      </main>

      <section className='flex flex-col lg:flex-row gap-7 py-14 app-container'>
        {richText}

        <div className='min-h-full border-t md:border-l border-stone-300' />

        <aside className='flex-grow'>
          <div className='mb-5 '>
            <h3 className='text-xl font-bold '>Outros ambientes</h3>
          </div>

          <div className='grid grid-cols-1 gap-4'>
            {location?.otherEnvironments.map(({ name, link, imageUrl }) => {
              return <EnvironmentCard key={name} name={name} link={link} imageUrl={imageUrl} aspect='video' />
            })}
          </div>
        </aside>
      </section>
    </>
  )
}
