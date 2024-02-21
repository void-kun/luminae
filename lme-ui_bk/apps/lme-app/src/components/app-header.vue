<script setup lang="ts">
import { computed } from 'vue';
import { SearchComplete } from '@lme/shared-ui';

const logoUrl = computed(() => {
  return '/images/logo-app.svg';
});
</script>

<template>
  <header class="flex justify-center">
    <div class="container h-24 flex justify-normal items-center">
      <div class="flex h-max items-center">
        <div class="flex gap-1 w-max h-max items-center">
          <img class="h-8" :src="logoUrl" alt="Logo" />
          <span class="text-3xl font-bold">Luminae</span>
        </div>
        <div class="w-80 h-10">
          <search-complete />
        </div>
      </div>
    </div>
  </header>
</template>
