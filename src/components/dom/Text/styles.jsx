import Image from 'next/image'
import tw from 'tailwind-styled-components'

export const Container = tw.section`
  max-w-lg 
  lg:max-w-xl 
  xl:max-w-2xl 
  2xl:max-w-3xl 
  
  mx-auto 
  lg:m-0
`
export const FigureContainer = tw.figure`
  relative 
  min-h-[24rem]
  max-h-[40rem]
  w-full
  mb-6
`
export const FigureImage = tw(Image)`
  object-cover 
  rounded
`
export const FigureCaption = tw.figcaption`
  absolute
  text-sm
  p-3
  bg-black/30
  text-white
  rounded-b
  z-10
  bottom-0
`
export const Blockquote = tw.blockquote`
  pl-4 
  mb-8 
  border-l-4 
  border-stone-500
`
export const Cite = tw.cite`
  block 
  text-sm 
  text-stone-500
`
export const ListContainer = tw.ul`
  mb-8 
  ml-8 
  list-disc
`
export const ListItem = tw.li`
  text-base 
  text-stone-700
`
export const Title = tw.h1`
  mb-4 
  text-4xl 
  font-bold
`
export const Paragraph = tw.p`
  mb-6 
  text-lg 
  text-stone-700
`
export const Quote = tw.p`
  text-base 
  text-stone-700
`
