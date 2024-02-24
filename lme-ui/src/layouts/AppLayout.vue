<script setup lang="ts">
import AppTopbar from '@/layouts/common/AppTopbar.vue'
import AppFooter from '@/layouts/common/AppFooter.vue'
</script>

<template>
  <div class="w-full h-full">
    <AppTopbar />
    <div>
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>
