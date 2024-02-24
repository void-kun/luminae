<script setup lang="ts">
import { ref } from 'vue'
import { MenuItem } from 'primevue/menuitem'
import Menubar from 'primevue/menubar'
import { MenuBarStyle } from '@/presets/style'

defineProps<{
  items: Array<MenuItem>
}>()

const menubarStyle = ref(MenuBarStyle)
</script>

<template>
  <Menubar :model="items" :pt="menubarStyle">
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span
            class="ml-2 text-base leading-0 text-secondary-text"
            v-if="item.label"
            >{{ item.label }}</span
          >
        </a>
      </router-link>
    </template>
  </Menubar>
</template>
