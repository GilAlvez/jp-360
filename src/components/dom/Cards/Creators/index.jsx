import Image from 'next/image'

export const CreatorCard = ({ name, role, bio, imageSrc, socialLinks }) => {
  return (
    <div className='flex items-center w-full'>
      <figure className='relative self-stretch w-1/3'>
        <Image src={imageSrc} alt={`Foto de ${name}`} className='object-cover rounded' fill />
      </figure>
      <div className='w-2/3 p-4'>
        <h4 className='text-stone-800'>{name}</h4>
        <h6 className='mb-2 text-lg font-medium text-stone-400'>{role}</h6>
        <p className='text-stone-700 line-clamp-4'>{bio}</p>
        <ul className='flex mt-4'>
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.href} className='mr-4'>
                <a href={link.href} target='_blank' rel='noopener noreferrer'>
                  <Icon className='text-2xl hover:text-primary-900 ' />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
