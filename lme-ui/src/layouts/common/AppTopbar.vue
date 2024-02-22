<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/components/Logo.vue'
import SearchComplete from '@/components/SearchComplete.vue'
import Navbar from '@/components/Navbar.vue'

const logoUrl = new URL('/images/lme-logo.png', import.meta.url).href

const search = (_query: string): Array<string> => {
  return [...Array(10).keys()].map((i) => `${i}`)
}

const categories = (): Array<string> => {
  return [...Array(10).keys()].map((i) => `cate-${i}`)
}

const navbar = ref([
  {
    route: '/about',
    label: 'About us',
  },
  {
    route: '/blog',
    label: 'Blog',
  },
  {
    route: '/contact',
    label: 'Contact us',
  },
  {
    route: '/support',
    label: 'Help & support',
  },
])

const socials = ref([
  {
    icon: 'pi pi-instagram',
    url: 'https://facebook.com',
  },
  {
    icon: 'pi pi-facebook',
    url: 'https://facebook.com',
  },
  {
    icon: 'pi pi-telegram',
    url: 'https://facebook.com',
  },
])
</script>

<template>
  <header class="w-full h-[96px]">
    <div class="h-full flex justify-between container mx-auto">
      <div class="flex items-center gap-8">
        <Logo :src="logoUrl" alt="Luminae Logo" suffix="Luminae" />
        <SearchComplete :on-search="search" :categories="categories" />
      </div>
      <div class="flex items-center gap-8">
        <Navbar :items="navbar" />
        <Navbar :items="socials" />
      </div>
    </div>
  </header>
</template>
