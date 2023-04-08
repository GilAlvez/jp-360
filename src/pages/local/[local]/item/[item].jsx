import Seo from '@/components/dom/Seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const Datsun = dynamic(() => import('@/components/canvas/Models/Datsun'), { ssr: true })

export default function ItemPage() {
  const route = useRouter()
  const specifications = [
    { title: 'Dimensão', value: '100 x 50 x 30 cm' },
    { title: 'Peso', value: '2 kg' },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
    {
      title: 'Notas',
      value:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo consectetur nulla quis hic rerum. Ducimus deleniti voluptates natus ipsa neque, suscipit distinctio doloribus pariatur quas impedit porro fugiat veritatis!',
    },
  ]

  return (
    <>
      <Seo />

      <div className='flex flex-grow h-[calc(100vh_-_10rem)] '>
        {/* Página Dinamica do Item Clicado: {`{${route.query.item}}`} */}
        <main id='local' className='relative w-2/3'>
          <Scene type='model' shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
            <Datsun />
          </Scene>
        </main>

        <section className='flex items-center flex-grow w-1/3 bg-white'>
          <div className='max-h-full overflow-y-auto'>
            <table className='min-w-full divide-y divide-stone-200'>
              <tbody className='bg-white divide-y divide-stone-200'>
                {specifications.map((spec, index) => (
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
