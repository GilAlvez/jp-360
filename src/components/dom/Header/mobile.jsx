import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import NavLinks from './nav'

export function HeaderMobile() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <>
      {open ? (
        <X className='text-4xl md:hidden' onClick={() => setOpen(false)} />
      ) : (
        <List className='text-4xl md:hidden' onClick={() => setOpen(true)} />
      )}

      {open && (
        <div className='z-40 absolute h-[calc(100vh_-_4rem)] top-16 right-0 w-screen'>
          <section className='absolute right-0 z-50 flex flex-col justify-between w-full h-full gap-8 p-10 pb-20 transition bg-black/50 md:hidden'>
            <NavLinks onClick={() => setOpen(false)} />
          </section>
        </div>
      )}
    </>
  )
}
