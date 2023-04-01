import useWindowSize from '@/hooks/useWindowSize'
import { useEffect, useMemo, useState } from 'react'
import GaleryCard from '../../Cards/Galery'

export const GalerySection = () => {
  const [galeryList, setGaleryList] = useState([])
  const { width } = useWindowSize()

  const fullGaleryList = useMemo(
    () => [
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
      {
        name: 'lugar5',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar6',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar7',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar8',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar9',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar10',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar11',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar12',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar13',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar14',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar15',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar16',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar17',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar18',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar19',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar20',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
      {
        name: 'lugar21',
        link: '/#test',
        imageUrl: '/360-thumb.jpg',
      },
    ],
    [],
  )

  useEffect(() => {
    const itemsToShow = width < 768 ? 2 : 12
    setGaleryList(fullGaleryList.slice(0, itemsToShow))
  }, [fullGaleryList, width])

  return (
    <section id='galeria' className='py-20 bg-white app-container'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Galeria</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {galeryList.map(({ name, link, imageUrl }) => {
          return <GaleryCard key={name} name={name} link={link} imageUrl={imageUrl} />
        })}
      </div>

      {galeryList.length < fullGaleryList.length && (
        <div className='grid place-items-center'>
          <button
            className='w-full mt-4 md:w-min btn btn-primary btn-md btn-filled'
            onClick={() => {
              const itemsToShow = Math.min(galeryList.length + (width < 768 ? 2 : 4), fullGaleryList.length)
              setGaleryList(fullGaleryList.slice(0, itemsToShow))
            }}>
            Mostrar Mais
          </button>
        </div>
      )}
    </section>
  )
}
