import { environments } from '@/data/environments-360'
import useWindowSize from '@/hooks/useWindowSize'
import { useEffect, useMemo, useState } from 'react'
import { EnvironmentCard } from '../../Cards/Environments'

export const EnvironmentsSection = () => {
  const [environmentsList, setEnvironmentsList] = useState([])
  const { width } = useWindowSize()

  const fullEnvironmentsList = useMemo(() => environments, [])

  useEffect(() => {
    const itemsToShow = width < 768 ? 2 : 8
    setEnvironmentsList(fullEnvironmentsList.slice(0, itemsToShow))
  }, [fullEnvironmentsList, width])

  return (
    <section id='ambientes' className='pb-20 bg-white pt-14 app-container'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Ambientes 360</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {environmentsList.map(({ name, link, imageUrl }) => {
          return <EnvironmentCard key={name} name={name} link={link} imageUrl={imageUrl} />
        })}
      </div>

      {environmentsList.length < fullEnvironmentsList.length && (
        <div className='grid place-items-center'>
          <button
            className='w-full mt-4 md:w-min btn btn-primary btn-md btn-filled'
            onClick={() => {
              const itemsToShow = Math.min(environmentsList.length + (width < 768 ? 2 : 4), fullEnvironmentsList.length)
              setEnvironmentsList(fullEnvironmentsList.slice(0, itemsToShow))
            }}>
            Mostrar Mais
          </button>
        </div>
      )}
    </section>
  )
}
