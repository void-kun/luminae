<script setup lang="ts">
// external library
import { ref } from 'vue'

// components
import SearchComplete from '@/components/SearchComplete.vue'
import Logo from '@/components/Logo.vue'
import Navbar from '@/components/Navbar.vue'
import Socials from '@/components/Socials.vue'

// types
import { ISocial } from '@/types'

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

const socials = ref<Array<ISocial>>([
  {
    icon: 'pi pi-instagram',
    url: '#',
    tooltip: 'Instagram',
  },
  {
    icon: 'pi pi-facebook',
    url: '#',
    tooltip: 'Facebook',
  },
  {
    icon: 'pi pi-telegram',
    url: '#',
    tooltip: 'Telegram',
  },
])
</script>

<template>
  <header class="w-full h-[96px] max-h-[96px]">
    <div
      class="w-full h-full flex justify-between container flex-wrap lg:flex-nowrap"
    >
      <div class="flex items-center gap-8 justify-between md:w-full sm:w-full">
        <Logo :src="logoUrl" alt="Luminae Logo" suffix="Luminae" />
        <SearchComplete :on-search="search" :categories="categories" />
      </div>
      <div class="flex items-center gap-24 justify-between md:w-full sm:w-full">
        <Navbar :items="navbar" />
        <Socials :socials="socials" />
      </div>
    </div>
  </header>
  <div
    class="w-full lg:h-[78px] md:h-[40px] sm:hidden bg-[#262626] text-primary-text"
  >
    <div class="w-full h-full flex justify-center container">
      <div class="flex gap-4">
        <div class="flex items-center gap-2 text-xl">
          <span class="pi pi-list"></span>
          <h2>Categories</h2>
        </div>
      </div>
    </div>
  </div>
</template>
