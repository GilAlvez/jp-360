import { useSphericalCoordinates } from '@/hooks/useSphericalCoordinates'
import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { Group } from 'three'

export default function Target({ route, hAngle = 0, vAngle = 90, radius = 500, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  const groupRef = useRef(new Group())
  const coordinates = useSphericalCoordinates(hAngle, vAngle, radius)

  useCursor(hovered)
  useFrame(({ camera }) => groupRef.current.lookAt(camera.position))

  return (
    <group
      position={coordinates}
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
