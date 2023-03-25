import { CreatorCard } from '@/components/dom/Cards/Creators'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

export const CreatorsSection = () => {
  return (
    <section className='grid grid-cols-1 gap-4 py-24 md:grid-cols-2 app-container bg-primary-100'>
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
    </section>
  )
}
