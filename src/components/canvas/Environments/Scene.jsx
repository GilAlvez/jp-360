import CanvasLoading from '@/components/dom/CanvasLoading'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import { forwardRef } from 'react'

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
          rotateSpeed={0.25}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
})

export default Scene
