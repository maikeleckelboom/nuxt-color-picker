<script lang="ts" setup>
import {
  convert,
  serialize,
  deserialize,
  listColorGamuts,
  listColorSpaces,
  OKLCH,
  sRGB,
} from '@texel/color'

const color = defineModel<string>({
  type: String,
  default: '#306ECCFF',
})

const deserialized = deserialize(color.value)

onMounted(() => {
  console.log(deserialized, 'deserialized')
})
</script>

<template>
  <div>
    <h1>Color Picker</h1>
    <input v-model="color" type="color" />
    <div>
      <pre>Color: {{ color }}</pre>
      <pre>Deserialized: {{ deserialized }}</pre>
      <pre>Converted: {{ convert([0.548, 0.159, 258.773], OKLCH, sRGB) }}</pre>
    </div>
    <div>
      <h2 class="text-2xl">Color Spaces</h2>
      <ul>
        <li v-for="space in listColorSpaces()" :key="space.id">
          {{ space.id }}
        </li>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl">Color Gamuts</h2>
      <ul>
        <li v-for="gamut in listColorGamuts()" :key="gamut.space.id">
          {{ gamut.space.id }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
