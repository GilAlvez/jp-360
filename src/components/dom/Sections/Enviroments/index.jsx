import useWindowSize from '@/hooks/useWindowSize'
import { useEffect, useMemo, useState } from 'react'
import { EnviromentCard } from '../../Cards/Enviroments'

export const EnviromentsSection = () => {
  const [enviromentsList, setEnviromentsList] = useState([])
  const { width } = useWindowSize()

  const fullEnviromentsList = useMemo(
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
    ],
    [],
  )

  useEffect(() => {
    const itemsToShow = width < 768 ? 2 : 8
    setEnviromentsList(fullEnviromentsList.slice(0, itemsToShow))
  }, [fullEnviromentsList, width])

  return (
    <section id='ambientes' className='pt-20 pb-20 bg-white app-container'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Ambientes 360</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {enviromentsList.map(({ name, link, imageUrl }) => {
          return <EnviromentCard key={name} name={name} link={link} imageUrl={imageUrl} />
        })}
      </div>

      {enviromentsList.length < fullEnviromentsList.length && (
        <div className='grid place-items-center'>
          <button
            className='w-full mt-4 md:w-min btn btn-primary btn-md btn-filled'
            onClick={() => {
              const itemsToShow = Math.min(enviromentsList.length + (width < 768 ? 2 : 4), fullEnviromentsList.length)
              setEnviromentsList(fullEnviromentsList.slice(0, itemsToShow))
            }}>
            Mostrar Mais
          </button>
        </div>
      )}
    </section>
  )
}
