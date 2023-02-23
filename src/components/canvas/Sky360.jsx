import { Sphere, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { BackSide, EquirectangularReflectionMapping } from 'three'

export default function Sky360() {
  const sphereRef = useRef()
  const texture = useTexture('/360.jpg')
  texture.mapping = EquirectangularReflectionMapping

  return (
    <Sphere args={[50, 64, 32]} ref={sphereRef}>
      <meshBasicMaterial map={texture} side={BackSide} />
    </Sphere>
  )
}
