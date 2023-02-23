export default function Instructions({ children }) {
  return (
    <div className='w-[512px] px-10 py-8 my-8 mx-auto text-sm rounded-lg shadow-xl bg-zinc-800 md:text-base'>
      <p className='hidden mb-8 md:block'>{children}</p>
      <div className='tracking-wider'>
        Update your header in <span className='text-green-200'> @/config </span>
        <br />
        The layout is set in <span className='text-green-200'>@/pages/_app</span>
        <br />
        The canvas is configured in <span className='text-green-200'>@/components/canvas/Scene</span>
        <br />
        Update your index component in <span className='text-green-200'>@/pages/index</span>
        <br />
        Delete placeholder pages <span className='text-red-200'> @/pages/blob</span>
        <br />
        Delete <span className='text-red-200'> @/components/dom/Instructions</span>
        <br />
        Delete <span className='text-red-200'> @/components/canvas/Blob</span> &{' '}
        <span className='text-red-200'>/Logo</span>
      </div>
    </div>
  )
}
