import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react'

const Scene = forwardRef(function Scene({ children, ...props }, ref) {
  return (
    <Canvas ref={ref} {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />

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
})

export default Scene
