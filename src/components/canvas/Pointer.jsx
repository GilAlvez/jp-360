import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor } from '@react-three/drei'

export default function Pointer({ route, hAngle = 0, vAngle = 90, radius = 500, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  const x = radius * Math.sin((vAngle * Math.PI) / 180) * Math.cos((hAngle * Math.PI) / 180)
  const y = radius * Math.cos((vAngle * Math.PI) / 180)
  const z = radius * Math.sin((vAngle * Math.PI) / 180) * Math.sin((hAngle * Math.PI) / 180)

  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      position={[x, y, z]}
      {...props}>
      <sphereGeometry args={[10, 64, 64]} />
      <meshPhysicalMaterial roughness={1} color={hovered ? '#999' : '#fff'} />
    </mesh>
  )
}
