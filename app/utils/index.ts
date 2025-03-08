/**
 * Find the maximum value in a given range that satisfies a condition.
 * @param options
 */
export function findMaxInGamutValue(options: {
  isInGamut: (value:number) => boolean
  initialLow: number
  initialHigh: number
  tolerance: number
  maxIterations?: number
}): number {
  const { maxIterations = 16 } = options
  let low = options.initialLow
  let high = options.initialHigh
  for (let i = 0; i < maxIterations; i++) {
    const mid = (low + high) / 2
    if (options.isInGamut(mid)) {
      low = mid
    } else {
      high = mid
    }
    if (high - low < options.tolerance) break
  }
  return low
}

