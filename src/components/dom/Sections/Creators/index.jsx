import { CreatorCard } from '@/components/dom/Cards/Creators'
import { LinkedinLogo } from 'phosphor-react'

export const CreatorsSection = () => {
  const creators = [
    {
      name: 'Gildson Alves',
      imageUrl:
        'https://media.licdn.com/dms/image/C4D03AQHnDL9GOO-m8w/profile-displayphoto-shrink_800_800/0/1653821693456?e=1686182400&v=beta&t=tM2ZbbvXJKs0h60wDxPsSdORJdsrEjEHi_uF6h6VD4g',
      role: 'Desenvolvedor',
      bio: 'asjfnasfasnfas',
      socialLinks: [{ href: 'https://www.linkedin.com/in/gildson-alves/', icon: LinkedinLogo }],
    },
    {
      name: 'Jośe Matheus',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQF2u_AWw0uT_g/profile-displayphoto-shrink_800_800/0/1664757622800?e=1686182400&v=beta&t=3IE_owIK2X53J-gyfPYCEIOolBupHiPsXYtyFINQhNA',
      role: 'PM',
      bio: 'Product Manager é um profissional que lidera a estratégia, desenvolvimento e lançamento de um produto. Ele trabalha em estreita colaboração com equipes de design, engenharia, marketing e vendas para garantir que o produto atenda às necessidades dos clientes e alcance os objetivos de negócios.',
      socialLinks: [{ href: 'https://www.linkedin.com/in/jose-product/', icon: LinkedinLogo }],
    },
  ]
  return (
    <section id='idealizadores' className='pt-20 pb-20 md:pt-14 app-container bg-primary-100'>
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
