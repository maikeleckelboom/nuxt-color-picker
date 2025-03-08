<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~~/layers/ui/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="content"
    :class="
      cn(
        'scrollbar-thin flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
