import Seo from '@/components/dom/Seo'
import { objectsSpecifications } from '@/data/objects-specifications'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'
import { useEffect, useState } from 'react'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const GenericModel = dynamic(() => import('@/components/canvas/Models/GenericModel'), { ssr: false })

export default function ItemPage() {
  const router = useRouter()
  const [object, setObject] = useState(null)

  function getObjectBySlug(slug) {
    return objectsSpecifications.find((o) => o.slug === slug)
  }

  useEffect(() => {
    const obj = getObjectBySlug(router.query.item)
    router.isReady && setObject(obj)
  }, [router.isReady, router.query.item])

  if (!object) return null

  return (
    <>
      <Seo />

      <div className='flex flex-col lg:flex-row flex-grow lg:h-[calc(100vh_-_10rem)] '>
        <main id='local' className='relative aspect-square md:aspect-auto lg:w-2/3 bg-stone-200'>
          <Link
            href={`/local/${router.query.local}`}
            className='absolute z-10 flex items-center gap-1 p-2 pl-4 transition rounded-r-full md:p-3 md:pl-6 top-3 md:top-6 w-fit hover:bg-stone-400/70 bg-stone-300'>
            <ArrowLeft size={20} weight='regular' />
            <p className='leading-none'>Voltar</p>
          </Link>

          {object.type === 'model' && (
            <Scene type='model' shadows dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 40 }}>
              <GenericModel url={object.url} />
            </Scene>
          )}
          {object.type === 'image' && (
            <Image src={object.url} alt='Imagem do objeto' className='object-contain ' priority fill />
          )}
        </main>

        <section className='flex items-center flex-grow bg-white lg:w-1/3'>
          <div className='max-h-full overflow-y-auto'>
            <table className='min-w-full divide-y divide-stone-200'>
              <tbody className='bg-white divide-y divide-stone-200'>
                {object.specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className='px-4 py-2 text-sm align-top text-stone-500'>{spec.title}</td>
                    <td className='py-2 pr-4 text-sm text-stone-900'>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
