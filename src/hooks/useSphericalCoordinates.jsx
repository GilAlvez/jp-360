import { useMemo } from 'react'

export const useSphericalCoordinates = (hAngle, vAngle, radius) => {
  return useMemo(() => {
    const invertedVAngle = 180 - vAngle
    const adjustedHAngle = hAngle - 90

    const x = radius * Math.sin((invertedVAngle * Math.PI) / 180) * Math.cos((adjustedHAngle * Math.PI) / 180)
    const y = radius * Math.cos((invertedVAngle * Math.PI) / 180)
    const z = radius * Math.sin((invertedVAngle * Math.PI) / 180) * Math.sin((adjustedHAngle * Math.PI) / 180)

    return [x, y, z]
  }, [hAngle, vAngle, radius])
}
