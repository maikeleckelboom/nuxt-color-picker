<script setup lang="ts">
import ColorPicker from '~/components/ColorPicker.vue'

const color = ref<string>('#30cca2')
</script>

<template>
  <div>
    <h1>Home</h1>
    {{ color }}
    <Button variant="destructive">
      Test Button
    </Button>
    <ColorPicker v-model="color" />
  </div>
</template>

<style scoped></style>
