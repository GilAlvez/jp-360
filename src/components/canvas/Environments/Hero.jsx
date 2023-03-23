import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, forwardRef } from 'react'

const Hero = forwardRef(function Hero({ children, preloadImage, ...props }, ref) {
  return (
    <Canvas ref={ref} {...props}>
      <Suspense fallback={null}>
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />

        {children}

        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={0.25}
        />
      </Suspense>
    </Canvas>
  )
})

export default Hero
