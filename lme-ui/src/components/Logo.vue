<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  suffix: string
}>()
</script>

<template>
  <router-link to="/" class="flex items-center gap-2 h-[40px]">
    <img :src="src" :alt="alt" class="h-[33px] w-auto" />
    <span class="text-[32px] font-semibold">{{ suffix }}</span>
  </router-link>
</template>
