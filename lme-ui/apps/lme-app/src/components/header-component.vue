<script setup lang="ts">
import { BaseButton } from '@lme/shared-ui';

const getLogoImage = (url: string): string => {
  return new URL(url, import.meta.url).href;
};

const hanleOnClick = (event: MouseEvent): void => {
  event.preventDefault();
  console.log('click ne');
};
</script>

<template>
  <header>
    <div class="w-6 h-4">
      <img :src="getLogoImage('/images/logo-app.png')" alt="Logo" />
    </div>
  </header>
  <base-button title="click me" :on-click="hanleOnClick" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
