<script lang="ts" setup>
import { convert, deserialize, listColorSpaces, OKLCH, sRGB } from '@texel/color'

const color = defineModel<string>('modelValue', {
  default: '#306ECCFF',
})

const deserialized = deserialize(color.value)
</script>

<template>
  <div>
    <h1>Color Picker</h1>
    <input v-model="color" type="color" />
  </div>
</template>

<style scoped></style>
