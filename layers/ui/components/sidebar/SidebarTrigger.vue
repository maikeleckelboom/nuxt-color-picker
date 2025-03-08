<script lang="ts" setup>
import type {HTMLAttributes} from 'vue'
import {cn} from '~~/layers/ui/lib/utils'
import {Button} from '~~/layers/ui/components/button'
import {PanelLeft} from 'lucide-vue-next'
import {useSidebar} from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const {toggleSidebar} = useSidebar()
</script>

<template>
  <div class="p-1.5">
    <Button
        :class="cn('h-8 w-8', props.class)"
        data-sidebar="trigger"
        size="icon"
        variant="ghost"
        @click="toggleSidebar"
    >
      <PanelLeft/>
      <span class="sr-only">Toggle Sidebar</span>
    </Button>
  </div>
</template>
