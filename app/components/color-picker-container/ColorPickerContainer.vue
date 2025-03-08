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
  <div class="rounded-sm border border-muted/10 bg-white p-4 shadow-sm">
    <Button>
      Button
    </Button>
    <slot />
  </div>
</template>

<style scoped>

</style>