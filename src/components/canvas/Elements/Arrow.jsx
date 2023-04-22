import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { Group } from 'three'

export default function Arrow({ route, hAngle = 0, vAngle = 120, radius = 400, tiltAngle = -50, ...props }) {
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

  const tiltRadians = (tiltAngle * Math.PI) / 180

  return (
    <group
      position={[x, y, z]}
      ref={groupRef}
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <group rotation={[tiltRadians, 0, 0]}>
        <mesh>
          <coneGeometry args={[11, 25, 3]} />
          <meshPhysicalMaterial color={hovered ? '#bbb' : '#fff'} />
        </mesh>
        <mesh position={[0, -20, 0]}>
          <cylinderGeometry args={[3, 1, 15, 32]} />
          <meshStandardMaterial color={hovered ? '#bbb' : '#fff'} />
        </mesh>
      </group>
    </group>
  )
}
