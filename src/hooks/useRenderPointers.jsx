import dynamic from 'next/dynamic'

const Target = dynamic(() => import('@/components/canvas/Pointers/Target'), { ssr: false })
const Arrow = dynamic(() => import('@/components/canvas/Pointers/Arrow'), { ssr: false })

export const useRenderPointers = (pointers) => {
  const pointerRenderFunctions = {
    target: (pointer, i) => <Target key={i} hAngle={pointer.hAngle} vAngle={pointer.vAngle} route={pointer.route} />,
    arrow: (pointer, i) => <Arrow key={i} hAngle={pointer.hAngle} vAngle={pointer.vAngle} route={pointer.route} />,
  }

  const pointerComponents = pointers?.map((p, i) => pointerRenderFunctions[p.type]?.(p, i) || null)

  return pointerComponents
}
