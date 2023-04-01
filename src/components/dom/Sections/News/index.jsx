import useWindowSize from '@/hooks/useWindowSize'
import { useEffect, useMemo, useState } from 'react'
import NewsCard from '../../Cards/News'

export const NewsSection = () => {
  const [newsList, setNewsList] = useState([])
  const { width } = useWindowSize()

  const fullNewsList = useMemo(
    () => [
      {
        title: 'Titulo Noticia1',
        subtitle:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam molestias, magni, quis fuga blanditiis provident accusamus iure perspiciatis odit est quos delectus odio, nisi earum voluptatum officiis? Quas, sint!',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        title: 'Titulo Noticia2',
        subtitle:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam molestias, magni, quis fuga blanditiis provident accusamus iure perspiciatis odit est quos delectus odio, nisi earum voluptatum officiis? Quas, sint!',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        title: 'Titulo Noticia3',
        subtitle:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam molestias, magni, quis fuga blanditiis provident accusamus iure perspiciatis odit est quos delectus odio, nisi earum voluptatum officiis? Quas, sint!',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        title: 'Titulo Noticia4',
        subtitle:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam molestias, magni, quis fuga blanditiis provident accusamus iure perspiciatis odit est quos delectus odio, nisi earum voluptatum officiis? Quas, sint!',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
    ],
    [],
  )

  useEffect(() => {
    const itemsToShow = width < 768 ? 3 : 6
    setNewsList(fullNewsList.slice(0, itemsToShow))
  }, [fullNewsList, width])

  return (
    <section id='noticias' className='py-20 bg-stone-50 app-container'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Notícias</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {newsList.map(({ title, subtitle, link, imageUrl }) => {
          return <NewsCard key={title} title={title} subtitle={subtitle} link={link} imageUrl={imageUrl} />
        })}
      </div>

      {newsList.length < fullNewsList.length && (
        <div className='grid place-items-center'>
          <button
            className='w-full mt-4 md:w-min btn btn-primary btn-md btn-filled'
            onClick={() => {
              const itemsToShow = Math.min(newsList.length + (width < 768 ? 2 : 4), fullNewsList.length)
              setNewsList(fullNewsList.slice(0, itemsToShow))
            }}>
            Mostrar Mais
          </button>
        </div>
      )}
    </section>
  )
}
