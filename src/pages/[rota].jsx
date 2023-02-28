import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Dynamic() {
  const route = useRouter()
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 text-4xl'>
      <h1>Rota Dinâmica: {route.query.rota.toUpperCase()}</h1>
      <Link href={'/'}>Voltar</Link>
    </div>
  )
}
