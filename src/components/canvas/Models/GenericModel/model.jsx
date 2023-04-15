import { useGLTF } from '@react-three/drei'

export function Model({ url, ...props }) {
  const gltf = useGLTF(url)

  return (
    <group {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}
