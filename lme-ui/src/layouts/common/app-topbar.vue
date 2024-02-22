<script setup lang="ts">
import { computed } from 'vue'

import Logo from '@/components/logo.vue'
import AutoComplete from '@/components/autocomplete.vue'

const logoUrl = computed(() => {
  return new URL('/images/lme-logo.png', import.meta.url).href
})
</script>

<template>
  <header class="container w-full h-[96px] flex">
    <div class="flex">
      <logo :src="logoUrl" alt="Luminae Logo" suffix="Luminae" />
      <AutoComplete />
    </div>
  </header>
</template>
