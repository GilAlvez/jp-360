import Image from 'next/image'
import { CircleNotch } from 'phosphor-react'

const CanvasLoading = ({ src, alt = 'thumb preview' }) => {
  return (
    <>
      <Image src={src} alt={alt} fill priority />
      <div className='absolute inset-0 bg-stone-900/50 backdrop-blur-sm'>
        <CircleNotch className='absolute text-white right-8 bottom-8 animate-spin' alt='Carregando' size={32} />
      </div>
    </>
  )
}

export default CanvasLoading
