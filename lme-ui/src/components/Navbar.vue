<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { MenuItem } from 'primevue/menuitem'

defineProps<{
  items: Array<MenuItem>
}>()
</script>

<template>
  <Menubar
    :model="items"
    :pt="{
      root: {
        class: ['flex h-[40px] items-center'],
      },
      menu: {
        class: ['flex gap-8'],
      },
      button: {
        class: [
          'flex sm:hidden',
          'items-center justify-center',
          'w-8',
          'h-8',
          'rounded-full',
          'text-surface-500 dark:text-white/80',
          'hover:text-surface-600 dark:hover:text-white/60',
          'hover:bg-surface-100 dark:hover:bg-surface-600/80',
          'focus:outline-none focus:outline-offset-0',
          'focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
          'transition duration-200 ease-in-out',
          'cursor-pointer',
          'no-underline',
        ],
      },
    }"
  >
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span class="ml-2" v-if="item.label">{{ item.label }}</span>
          <span v-else :class="[item.icon]"></span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>
