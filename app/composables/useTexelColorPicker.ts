import {
  type ColorSpace,
  convert,
  deserialize,
  listColorGamuts,
  listColorSpaces,
  serialize,
  sRGB,
  type Vector,
} from '@texel/color'

const spaces = listColorSpaces()
const gamuts = listColorGamuts()

export type ColorSpaceId =
  | 'xyz'
  | 'xyz-d50'
  | 'oklab'
  | 'oklch'
  | 'okhsv'
  | 'okhsl'
  | 'srgb'
  | 'srgb-linear'
  | 'display-p3'
  | 'display-p3-linear'
  | 'rec2020'
  | 'rec2020-linear'
  | 'a98-rgb'
  | 'a98-rgb-linear'
  | 'prophoto-rgb'
  | 'prophoto-rgb-linear'

interface ColorPickerState {
  coords: Vector
  space: string
  alpha: number
  spaces: ColorSpace[]
}

interface UseColorPickerOptions {
  space?: string
  alpha?: number
}

export function useTexelColorPicker(
  value: MaybeRefOrGetter<string>,
  options?: UseColorPickerOptions,
) {
  const state: ColorPickerState = reactive({
    coords: [0, 0, 0],
    alpha: 1,
    space: 'srgb',
    spaces,
  })

  function setColor(color: string, alpha?: number) {
    const { coords, id } = deserialize(color)
    const space = state.spaces.find((f) => id === f.id)
    if (space) {
      state.coords = coords
      state.space = space.id
    }
    if (alpha && alpha >= 0) {
      state.alpha = alpha
    }
  }

  function getColor(): string {
    let space = state.spaces.find((f) => f.id === state.space)
    if (!space) space = sRGB
    return serialize(state.coords, space)
  }

  function getColorSpace(space: ColorSpaceId | (string & {})): ColorSpace {
    const s = state.spaces.find((f) => f.id === space)
    if (!s) return sRGB
    return s
  }

  watch(
    () => toValue(value),
    (val) => {
      setColor(val)
    },
    { immediate: true },
  )

  watch(
    () => state.space,
    (newSpace) => {
      state.coords = convert(
        state.coords,
        getColorSpace(state.space),
        getColorSpace(newSpace),
      )
    },
  )

  return {
    state,
    setColor,
    getColor,
    spaces,
    gamuts,
  }
}
