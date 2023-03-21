import Image from 'next/image'
import { useEffect, useState } from 'react'
import NavLinks from './nav'
import { X, List } from 'phosphor-react'

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <>
      <header className='absolute top-0 z-50 flex items-center justify-between w-full h-20 gap-12 text-white shadow-lg backdrop-blur-sm app-container bg-black/20'>
        {/* --- DESKTOP NAVIGATION --- */}

        {/* <figure className='relative w-48 h-full'>
          <Image src='/LogoWhite.svg' alt='Logo' layout='fill' priority />
        </figure> */}
        <h1 className='text-3xl font-bold'>Logo</h1>
        <NavLinks className='hidden md:block' onClick={() => setOpen(false)} />

        {/* --- MOBILE NAVIGATION --- */}

        {open ? (
          <X className='text-4xl md:hidden' onClick={() => setOpen(false)} />
        ) : (
          <List className='text-4xl md:hidden' onClick={() => setOpen(true)} />
        )}

        {open && (
          <div className='z-40 absolute h-[calc(100vh_-_5rem_+_0.25rem)] top-20 right-0 w-screen'>
            <section className='absolute right-0 z-50 flex flex-col justify-between w-full h-full gap-8 p-10 pb-20 -mt-1 transition bg-primary-500 md:hidden'>
              <NavLinks onClick={() => setOpen(false)} />
            </section>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
