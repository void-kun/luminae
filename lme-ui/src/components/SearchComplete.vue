<script setup lang="ts">
import { ref } from 'vue'
import AutoComplete, { AutoCompleteCompleteEvent } from 'primevue/autocomplete'

const searchText = ref<string>()
const searchResult = ref<Array<string>>([])

const search = (_event: AutoCompleteCompleteEvent): void => {
  searchResult.value = [...Array(10).keys()].map((i) => `${i}`)
}
</script>

<template>
  <AutoComplete
    v-model="searchText"
    :suggestions="searchResult"
    @complete="search"
    dropdown
    :pt="{
      root: {
        class: [
          'inline-flex text-surface-900',
          'rounded-[4px] h-[40px]',
          'border-x border-y border-[#D9D9D9]',
        ],
      },
      input: {
        class: [
          'rounded-[4px] outline-none',
          'appearance-none text-surface-700 mr-x',
          'px-3 w-[345px] text-[#9D9D9D]',
        ],
      },
      dropdownbutton: {
        root: {
          class: [
            'px-4 py-3 leading-none',
            'focus:outline-none focus:outline-offset-0',
          ],
        },
      },
    }"
  >
    <template> </template>
    <template #dropdownicon>
      <span class="pi pi-search"></span>
    </template>
  </AutoComplete>
</template>
