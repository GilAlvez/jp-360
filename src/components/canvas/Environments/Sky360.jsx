import { OrbitControls, Sphere, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { BackSide } from 'three'

export default function Sky360({ imageUrl, children, ref, ...props }) {
  return (
    <Canvas ref={ref} {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />

      <Sky imageUrl={imageUrl} />
      {children}

      <OrbitControls
        target={[0, 0, 0]}
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        rotateSpeed={0.25}
        dampingFactor={0.05}
      />
    </Canvas>
  )
}

const Sky = ({ imageUrl, ...props }) => {
  const sphereRef = useRef()
  const texture = useTexture(imageUrl)

  return (
    <Sphere args={[500, 60, 40]} ref={sphereRef} {...props}>
      <meshBasicMaterial map={texture} side={BackSide} />
    </Sphere>
  )
}
