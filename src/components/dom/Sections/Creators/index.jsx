import { CreatorCard } from '@/components/dom/Cards/Creators'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

export const CreatorsSection = () => {
  return (
    <section id='idealizadores' className='pt-20 pb-20 md:pt-14 app-container bg-primary-100'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Idealizadores</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <CreatorCard
          imageSrc='/360-thumb.jpg'
          name='Mateus Silva'
          role='PMO'
          bio='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa architecto ipsum doloremque ut recusandae, quos nisi quae, eligendi nihil delectus sequi minus itaque quis eveniet pariatur expedita animi obcaecati accusamus?'
          socialLinks={[
            { href: 'https://linkedin.com', icon: LinkedinLogo },
            { href: 'https://instagram.com', icon: InstagramLogo },
          ]}
        />

        <CreatorCard
          imageSrc='/360-thumb.jpg'
          name='Mateus Silva'
          role='PMO'
          bio='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa architecto ipsum doloremque ut recusandae, quos nisi quae, eligendi nihil delectus sequi minus itaque quis eveniet pariatur expedita animi obcaecati accusamus?'
          socialLinks={[
            { href: 'https://linkedin.com', icon: LinkedinLogo },
            { href: 'https://instagram.com', icon: InstagramLogo },
            { href: 'https://github.com', icon: GithubLogo },
            { href: 'https://facebook.com', icon: FacebookLogo },
            { href: 'https://facebook.com', icon: WhatsappLogo },
          ]}
        />
      </div>
    </section>
  )
}
