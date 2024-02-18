<script setup lang="ts">
import headerComponent from './components/header-component.vue';
</script>

<template>
  <div>
    <header-component />
    <a href="https://vitejs.dev" target="_blank"> </a>
    <a href="https://vuejs.org/" target="_blank"> </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
