<template>
  <v-btn-primary>{{ title }}</v-btn-primary>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  onClick: (_: MouseEvent) => void | undefined;
}>();
</script>
