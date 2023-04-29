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
      {/* 1st Footer */}
      {!short && (
        <footer
          className={`py-5 app-container place-items-baseline d-footer bg-stone-800 text-stone-100 ${
            hidden && 'hidden'
          }`}>
          <div>
            <picture className='relative w-32 h-16'>
              <Image src='/LogoWhite.svg' alt='Logo' fill priority />
            </picture>
            <p className='max-w-sm pt-2 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eligendi quo blanditiis, accusamus
              cumque veritatis vero at dolor, velit numquam amet ea dolorum?
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h6 className='mb-0 d-footer-title'>{col.title}</h6>
              {col.data.map((cell) => (
                <a key={cell.name} className='d-link d-link-hover' href={cell.link}>
                  {cell.name}
                </a>
              ))}
            </div>
          ))}
        </footer>
      )}

      {/* 2nd Footer */}
      <footer className='items-center justify-between py-3 gap-y-3 d-footer bg-stone-900 text-stone-300 app-container'>
        <div className='items-center grid-flow-col text-center'>
          <p className='text-xs'>Copyright © 2023 - Todos os direitos reservados</p>
        </div>
        <div className='grid-flow-col gap-4'>
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.link}
                href={social.link}
                target='_blank'
                rel='noreferrer noopener'
                className='fill-current'>
                <Icon className='text-xl hover:text-stone-400' />
              </a>
            )
          })}
        </div>
      </footer>
    </div>
  )
}
