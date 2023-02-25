import { Suspense, forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

const Scene = forwardRef(function Scene({ children, ...props }, ref) {
  return (
    <div className='absolute top-0 w-full -translate-x-1/2 left-1/2 md:w-4/5 bg-zinc-800 aspect-video'>
      <Canvas ref={ref} {...props}>
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />

        <Suspense fallback={null}>{children}</Suspense>

        <Preload all />
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          rotateSpeed={0.5}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
})

export default Scene
