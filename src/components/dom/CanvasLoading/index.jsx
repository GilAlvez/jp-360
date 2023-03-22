import { CircleNotch } from 'phosphor-react'
import React from 'react'

const CanvasLoading = () => {
  return (
    <div className='absolute grid w-full h-full place-items-center bg-black/20 backdrop-blur-sm'>
      <CircleNotch className='animate-spin' alt='carregando' size={32} />
    </div>
  )
}

export default CanvasLoading
