import { CreatorCard } from '@/components/dom/Cards/Creators'
import { creators } from '@/data/creators'

export const CreatorsSection = () => {
  return (
    <section id='idealizadores' className='pb-20 pt-14 app-container bg-primary-100'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Idealizadores</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {creators.map((creator) => (
          <CreatorCard
            key={creator.name}
            imageSrc={creator.imageUrl}
            name={creator.name}
            role={creator.role}
            bio={creator.bio}
            socialLinks={creator.socialLinks}
          />
        ))}
      </div>
    </section>
  )
}
