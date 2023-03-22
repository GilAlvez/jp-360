export const Legals = ({ legals }) => {
  return (
    <div className='flex gap-4 text-sm text-gray-400 '>
      {legals?.termsUrl && (
        <a href={legals.termsUrl} target='_blank' rel='noreferrer noopener' className='hover:underline'>
          Termos de Uso
        </a>
      )}
      {legals?.cookiesUrl && (
        <a href={legals.cookiesUrl} target='_blank' rel='noreferrer noopener' className='hover:underline'>
          Política de Cookies
        </a>
      )}
      {legals?.privacyUrl && (
        <a href={legals.privacyUrl} target='_blank' rel='noreferrer noopener' className='hover:underline'>
          Política de Privacidade
        </a>
      )}
    </div>
  )
}
