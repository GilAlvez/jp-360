import Link from 'next/link'

const NavLinks = (props) => {
  const { className, onClick } = props

  const menuLinks = [
    { label: 'Inicio', url: '/#hero' },
    { label: 'Ambientes', url: '/#ambientes' },
    { label: 'Noticias', url: '/#noticias' },
    { label: 'Contato', url: '/#idealizadores' },
  ]
  return (
    <nav className={className}>
      <ul className='flex flex-col gap-8 md:flex-row'>
        {menuLinks.map((item) => (
          <li
            key={item.label}
            className='flex text-base font-medium whitespace-nowrap hover:underline underline-offset-2 '>
            <Link href={item.url} className='py-3 pr-5 md:pr-0' onClick={onClick} scroll={false}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
