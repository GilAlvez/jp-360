import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'
import { Group } from 'three'

export default function Target({ route, hAngle = 0, vAngle = 90, radius = 500, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  const groupRef = useRef(new Group())

  const x = radius * Math.sin((vAngle * Math.PI) / 180) * Math.cos((hAngle * Math.PI) / 180)
  const y = radius * Math.cos((vAngle * Math.PI) / 180)
  const z = radius * Math.sin((vAngle * Math.PI) / 180) * Math.sin((hAngle * Math.PI) / 180)

  useFrame(({ camera }) => {
    groupRef.current.lookAt(camera.position)
  })

  return (
    <group
      position={[x, y, z]}
      ref={groupRef}
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshPhysicalMaterial color={hovered ? '#bbb' : '#fff'} />
      </mesh>
      <mesh>
        <torusGeometry args={[14, 1.5, 32, 64]} />
        <meshStandardMaterial color={hovered ? '#bbb' : '#fff'} />
      </mesh>
    </group>
  )
}
