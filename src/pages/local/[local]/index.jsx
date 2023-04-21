import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import CanvasLoading from '@/components/dom/CanvasLoading'
import { EnviromentCard } from '@/components/dom/Cards/Enviroments'
import Seo from '@/components/dom/Seo'
import { Text } from '@/components/dom/Text'

const Scene = dynamic(() => import('@/components/canvas/Environments/Scene'), { ssr: true })
const Sky360 = dynamic(() => import('@/components/canvas/Environments/Sky360'), { ssr: true })
const Target = dynamic(() => import('@/components/canvas/Elements/Target'), { ssr: true })

export default function LocalPage() {
  const route = useRouter()
  const otherEnviroments = [
    {
      name: 'lugar1',
      link: '/#test',
      imageUrl: '/360-thumb.jpg',
    },
    {
      name: 'lugar2',
      link: '/#test',
      imageUrl: '/360-thumb.jpg',
    },
    {
      name: 'lugar3',
      link: '/#test',
      imageUrl: '/360-thumb.jpg',
    },
    {
      name: 'lugar4',
      link: '/#test',
      imageUrl: '/360-thumb.jpg',
    },
  ]

  return (
    <>
      <Seo />

      <main
        id='local'
        className='w-full relative aspect-[1_/_2] sm:aspect-square md:aspect-[21_/_10] 3xl:aspect-[21_/_9]'>
        <CanvasLoading src='/360-thumb.jpg' />
        <Scene type='enviroment'>
          <Sky360 imageUrl='/360.jpg' />
          <Target hAngle={305} route={`/local/${route.query.local}/item/object-slug`} />
        </Scene>
      </main>

      <section className='flex flex-col lg:flex-row gap-7 py-14 app-container'>
        <Text.Container>
          <Text.Title>Título do Texto</Text.Title>

          <Text.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, neque ut sollicitudin convallis,
            enim purus dignissim quam, eu dapibus quam risus vitae nisl.
          </Text.Paragraph>

          <Text.FigureContainer>
            <Text.FigureImage src='https://source.unsplash.com/random' alt='Imagem do Texto' fill />
            <Text.FigureCaption>
              Fusce eget lorem interdum, ultrices ipsum id, congue urna. Nullam ut massa euismod, porttitor nibh sit
              amet, semper nunc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus soluta
              quidem saepe explicabo esse? Sint distinctio ipsum veniam possimus impedit, porro repudiandae eius sit
              tempore, ea alias explicabo vel!
            </Text.FigureCaption>
          </Text.FigureContainer>

          <Text.Blockquote>
            <Text.Quote>
              Suspendisse dignissim justo ac risus interdum facilisis. Sed efficitur arcu velit, non sagittis nisl
              iaculis eget.
            </Text.Quote>
            <Text.Cite>- Autor da Citação</Text.Cite>
          </Text.Blockquote>

          <Text.ListContainer>
            <Text.ListItem>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </Text.ListItem>
            <Text.ListItem>Sed quis ipsum convallis, pellentesque purus vitae, commodo turpis.</Text.ListItem>
            <Text.ListItem>Donec pretium nibh non sapien eleifend, sit amet aliquam sapien mollis.</Text.ListItem>
          </Text.ListContainer>

          <Text.Paragraph>
            Etiam varius nisi vitae ante malesuada eleifend. Phasellus porttitor, lectus a sodales consectetur, felis
            enim maximus nunc, sit amet fermentum neque augue vel metus.
          </Text.Paragraph>
        </Text.Container>

        <div className='min-h-full border-t md:border-l border-stone-300' />

        <aside className='flex-grow'>
          <div className='mb-5 '>
            <h3 className='text-xl font-bold '>Outros ambientes</h3>
          </div>

          <div className='grid grid-cols-1 gap-4'>
            {otherEnviroments.map(({ name, link, imageUrl }) => {
              return <EnviromentCard key={name} name={name} link={link} imageUrl={imageUrl} aspect='video' />
            })}
          </div>
        </aside>
      </section>
    </>
  )
}
