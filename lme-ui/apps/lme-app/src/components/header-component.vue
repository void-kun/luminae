<script setup lang="ts">
const getLogoImage = (url: string): string => {
  return new URL(url, import.meta.url).href;
};
</script>

<template>
  <header>
    <div class="w-10 h-4">
      <img :src="getLogoImage('/images/logo-app.png')" alt="Logo" />
    </div>
  </header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
