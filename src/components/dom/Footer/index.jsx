import Image from 'next/image'
import { Legals } from './legals'

import { Socials } from './socials'

const Footer = ({ columns, logoUrl, description, legals, copyright, socials, shortand, ...rest }) => {
  return (
    <>
      {shortand ? (
        copyright && <footer className='py-3 text-center app-container text-stone-400 bg-stone-900'>{copyright}</footer>
      ) : (
        <>
          <footer className='flex flex-col gap-4 pt-10 pb-4 mt-auto app-container bg-stone-800' {...rest}>
            <div className='flex flex-col gap-4 lg:gap-8 lg:flex-row'>
              <div className='flex flex-col gap-4 text-gray-100 md:w-full'>
                {logoUrl && (
                  <figure className='relative w-40 h-12'>
                    <Image src={logoUrl} alt='Logo' fill />
                  </figure>
                )}
                <p className='text-base'>{description}</p>
              </div>
              {columns && (
                <table className='w-full text-gray-100 border-separate table-fixed lg:table-auto lg:pt-14'>
                  <thead>
                    <tr className='text-left'>
                      {columns?.map(({ title }) => (
                        <th className='py-1 font-medium text-gray-500' key={title}>
                          {title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='text-left'>
                      {columns?.map(({ content }, index) => (
                        <td className='pr-4 align-top last-of-type:pr-0' key={index}>
                          <div className='flex flex-col gap-2'>{content}</div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              )}
            </div>

            <div className='flex flex-col justify-between gap-4 lg:flex-row'>
              <Socials socials={socials} />
              <Legals legals={legals} />
            </div>
          </footer>

          {copyright && (
            <footer className='py-3 text-sm text-center app-container text-stone-400 bg-stone-900'>{copyright}</footer>
          )}
        </>
      )}
    </>
  )
}

export default Footer
