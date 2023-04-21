import Image from 'next/image'
import Link from 'next/link'

export default function NewsCard({ title, subtitle, link, imageUrl }) {
  return (
    <div className='overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl'>
      <figure className='relative w-full h-32 '>
        <Image src={imageUrl} alt={title} className='object-cover' fill />
      </figure>

      <div className='flex flex-col gap-2 p-6'>
        <h6>{title}</h6>
        <p className='text-sm line-clamp-2 text-stone-700'>{subtitle}</p>
        <Link
          href={link}
          rel='noopener noreferrer'
          target='_blank'
          className='self-end mt-2 btn btn-primary btn-sm btn-text'>
          Leia Mais
        </Link>
      </div>
    </div>
  )
}
