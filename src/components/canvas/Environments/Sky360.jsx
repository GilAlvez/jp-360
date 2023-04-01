import { Sphere, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { BackSide } from 'three'

export default function Sky360({ imageUrl, ...rest }) {
  const sphereRef = useRef()
  const texture = useTexture(imageUrl)

  return (
    <Sphere args={[500, 60, 40]} ref={sphereRef} {...rest}>
      <meshBasicMaterial map={texture} side={BackSide} />
    </Sphere>
  )
}
