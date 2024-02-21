<template>
  <button>{{ title }}</button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  onClick: (_: MouseEvent) => void | undefined;
}>();
</script>
