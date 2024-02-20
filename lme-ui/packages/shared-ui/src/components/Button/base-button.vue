<template>
  <div class="bg-slate-500 rounded-lg">
    <button @click="onClick">{{ title }}</button>
    <span>Hello</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  onClick: (_: MouseEvent) => void | undefined;
}>();
</script>
