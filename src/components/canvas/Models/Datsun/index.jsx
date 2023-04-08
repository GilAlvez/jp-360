import { BakeShadows, Stage } from '@react-three/drei'
import { Model } from './model'

export default function Datsun() {
  return (
    <>
      <Stage environment='city' intensity={0.6}>
        <Model color='darkorange' position={[0, 0, 0]} />
      </Stage>
      <BakeShadows />
    </>
  )
}
