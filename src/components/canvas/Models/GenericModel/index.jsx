import { BakeShadows, Stage, useGLTF } from '@react-three/drei'
import { Model } from './model'

export default function GenericModel({ url }) {
  useGLTF.preload(url)
  return (
    <>
      <Stage>
        <Model url={url} position={[0, 0, 0]} />
      </Stage>
      <BakeShadows />
    </>
  )
}
