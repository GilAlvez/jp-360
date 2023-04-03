import Image from 'next/image'
import NavLinks from './nav'

const HeaderDesktop = () => {
  return (
    <>
      <picture className='relative w-32 h-full '>
        <Image src='/LogoWhite.svg' alt='Logo' fill priority />
      </picture>
      <NavLinks className='hidden md:block' />
    </>
  )
}

export default HeaderDesktop
