<script setup lang="ts">
import AppHeader from '@/components/app-header.vue';
</script>

<template>
  <div class="h-full w-full">
    <app-header />
    <router-view></router-view>
  </div>
</template>
