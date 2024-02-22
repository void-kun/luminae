<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import SearchComplete from '@/components/SearchComplete.vue'

const logoUrl = new URL('/images/lme-logo.png', import.meta.url).href
</script>

<template>
  <header class="w-full h-[96px] flex">
    <div class="flex items-center gap-8">
      <Logo :src="logoUrl" alt="Luminae Logo" suffix="Luminae" />
      <SearchComplete />
    </div>
  </header>
</template>
