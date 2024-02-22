<script setup lang="ts">
import AppTopbar from '@/layouts/common/app-topbar.vue'
import AppFooter from '@/layouts/common/app-footer.vue'
</script>

<template>
  <div>
    <app-topbar />
    <div>
      <router-view></router-view>
    </div>
    <app-footer />
  </div>
</template>
