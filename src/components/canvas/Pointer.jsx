import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor, meshPhysicalMaterial } from '@react-three/drei'

export default function Pointer({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)

  useCursor(hovered)

  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshPhysicalMaterial roughness={1} color={hovered ? '#555' : '#fff'} />
    </mesh>
  )
}
