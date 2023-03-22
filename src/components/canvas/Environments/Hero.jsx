import { Html, OrbitControls, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, forwardRef } from 'react'

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Hero = forwardRef(function Hero({ children, preloadImage, ...props }, ref) {
  return (
    <div className='w-full relative aspect-square md:aspect-[21_/_10] 3xl:aspect-[21_/_9]'>
      <Canvas ref={ref} {...props}>
        <Suspense fallback={<Loader />}>
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
    </div>
  )
})

export default Hero
