import NavLinks from './nav'

const HeaderDesktop = () => {
  return (
    <>
      <h1 className='text-3xl font-bold'>Logo</h1>
      <NavLinks className='hidden md:block' />
    </>
  )
}

export default HeaderDesktop
