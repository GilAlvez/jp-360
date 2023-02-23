import { forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

const Scene = forwardRef(function Scene({ children, ...props }, ref) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} ref={ref}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
})

export default Scene
