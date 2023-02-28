export default function Instructions({ children }) {
  return (
    <div className='w-5/6 max-w-lg px-10 py-8 m-8 mx-auto text-sm rounded-lg shadow-xl bg-zinc-800 md:text-base'>
      <p>{children}</p>
    </div>
  )
}
