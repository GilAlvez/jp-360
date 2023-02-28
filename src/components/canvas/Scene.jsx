import { Suspense, forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Image from 'next/image'
import CanvasLoading from '../dom/CanvasLoader'

const Scene = forwardRef(function Scene({ children, preloadImage, ...props }, ref) {
  return (
    <div className='w-full relative aspect-[21_/_9]'>
      <Image src={preloadImage} alt='thumb preview' fill />
      <CanvasLoading />

      <Canvas ref={ref} {...props}>
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />

        {children}

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
