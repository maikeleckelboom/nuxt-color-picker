<script setup lang="ts">
interface ColorPickerFrameSlots {
  default: []
}

interface ColorPickerFrameProps {
}

interface ColorPickerFrameEmits {
}

const emit = defineEmits<ColorPickerFrameEmits>()
const props = defineProps<ColorPickerFrameSlots>()
const slots = defineSlots<ColorPickerFrameSlots>()

</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>