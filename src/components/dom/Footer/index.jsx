import Image from 'next/image'
import { InstagramLogo } from 'phosphor-react'

export default function Footer({ hidden = false, short = false }) {
  const columns = [
    {
      title: 'Contato',
      data: [
        { name: 'contato@gmail.com', link: 'mailto:contato@gmail.com' },
        { name: '(83) 9 9999-9999', link: 'tel:+5583999999999p000' },
      ],
    },
  ]

  const socials = [{ icon: InstagramLogo, link: 'link' }]

  return (
    <div className='mt-auto'>
      {!short && (
        <footer className={`py-8 app-container d-footer bg-stone-800 text-stone-100 ${hidden && 'hidden'}`}>
          <div className='w-1/2'>
            <picture className='relative h-32 w-44'>
              <Image src='/LogoWhite.svg' alt='Logo' fill priority />
            </picture>
            <p className='text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem blanditiis libero placeat sit id
              error itaque provident suscipit minima, vero nihil alias.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h6 className='d-footer-title'>{col.title}</h6>
              {col.data.map((cell) => (
                <a key={cell.name} className='d-link d-link-hover' href={cell.link}>
                  {cell.name}
                </a>
              ))}
            </div>
          ))}
        </footer>
      )}

      <footer className='items-center py-4 gap-y-4 d-footer bg-stone-900 text-stone-300 app-container'>
        <div className='items-center grid-flow-col text-center'>
          <p>Copyright © 2023 - Todos os direitos reservados</p>
        </div>
        <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.link}
                href={social.link}
                target='_blank'
                rel='noreferrer noopener'
                className='fill-current'>
                <Icon className='text-2xl hover:text-primary-900' />
              </a>
            )
          })}
        </div>
      </footer>
    </div>
  )
}
