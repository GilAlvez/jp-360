import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function Scene({ children, type = 'free', ref, ...props }) {
  const controls =
    type === 'free'
      ? {
          target: [0, 0, 0],
          enableZoom: true,
          enablePan: true,
          enableRotate: true,
          enableDamping: true,
          rotateSpeed: 0.25,
          dampingFactor: 0.05,
        }
      : type === 'auto-rotate'
      ? {
          target: [0, 0, 0],
          enableZoom: false,
          enablePan: false,
          enableRotate: false,
          autoRotate: true,
          autoRotateSpeed: 0.25,
        }
      : type === 'enviroment'
      ? {
          target: [0, 0, 0],
          enableZoom: false,
          enablePan: false,
          enableRotate: true,
          enableDamping: true,
          rotateSpeed: 0.25,
          dampingFactor: 0.05,
        }
      : type === 'model'
      ? {
          target: [0, 0, 0],
          enableZoom: false,
          enablePan: false,
          enableRotate: true,
          enableDamping: true,
          autoRotate: true,
          autoRotateSpeed: 0.25,
          rotateSpeed: 0.25,
          dampingFactor: 0.05,
        }
      : null

  return (
    <Canvas ref={ref} {...props}>
      <Suspense fallback={null}>
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />

        {children}

        <OrbitControls {...controls} />
      </Suspense>
    </Canvas>
  )
}

//  target={[0, 0, 0]}
//           enableZoom={false}
//           enablePan={false}
//           enableRotate={true}
//           autoRotate={false}
//           enableDamping={true}
//           rotateSpeed={0.25}
//           dampingFactor={0.05}
