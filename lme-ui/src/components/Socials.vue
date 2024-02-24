<script setup lang="ts">
import { ref } from 'vue'
import { ISocial } from '@/types'
import { TooltipStyle } from '@/presets/style'

defineProps<{ socials: Array<ISocial> }>()

const tooltipStyle = ref(TooltipStyle)
</script>

<template>
  <div class="flex gap-4">
    <a :href="'//' + social.url" target="_blank" v-for="social in socials">
      <span
        :class="social.icon"
        class="text-disabled text-2xl"
        v-tooltip.top="{ value: social.tooltip, pt: tooltipStyle }"
      ></span>
    </a>
  </div>
</template>
