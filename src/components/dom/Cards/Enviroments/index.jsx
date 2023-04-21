import Image from 'next/image'
import Link from 'next/link'

export function EnviromentCard({ name, link, imageUrl, aspect = 'square' }) {
  return (
    <Link
      href={link}
      className={`relative p-4 transition duration-300 rounded shadow-md hover:shadow-lg group ${
        aspect === 'square' ? 'aspect-square' : aspect === 'video' ? 'aspect-[2.25_/_1]' : ''
      }`}>
      <div className='absolute inset-0'>
        <figure className='relative w-full h-full'>
          <Image src={imageUrl} className='object-cover rounded' alt={name} fill />
          <figcaption
            className={`absolute bottom-0 left-0 right-0 text-center transition-all duration-300 rounded-b group-hover:bg-primary-900 text-primary-50 bg-black/30 ${
              aspect === 'video' ? 'py-2' : 'py-4'
            } `}>
            {name}
          </figcaption>
        </figure>
      </div>
    </Link>
  )
}
