import { useEffect, useState } from 'react'
import HeaderDesktop from './desktop'
import { HeaderMobile } from './mobile'

const Header = ({ hidden = false, float = false }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`sticky top-0 z-50 ${hidden && 'hidden'}`}>
        <header
          className={`app-container  flex items-center justify-between h-16 gap-12 text-white backdrop-blur-[1px] transition-all duration-300 
            ${scrollPosition > 0 ? 'bg-stone-900' : 'bg-black/50'}
            ${float ? 'absolute inset-0' : 'bg-stone-900'} 
          `}>
          <HeaderDesktop />
          <HeaderMobile />
        </header>
      </div>
    </>
  )
}

export default Header
