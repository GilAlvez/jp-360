import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './nav'

const HeaderDesktop = () => {
  return (
    <>
      <picture className='relative w-32 h-full '>
        <Link href='/#hero'>
          <Image src='/LogoWhite.svg' alt='Logo' fill priority />
        </Link>
      </picture>
      <NavLinks className='hidden md:block' />
    </>
  )
}

export default HeaderDesktop
