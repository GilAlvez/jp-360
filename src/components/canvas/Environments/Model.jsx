import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Datsun } from './Datsun'

export default function Model() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
      <Suspense fallback={null}>
        <Stage environment='city' intensity={0.6}>
          <Datsun color='darkorange' position={[0, 0, 0]} />
        </Stage>
        <BakeShadows />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}
