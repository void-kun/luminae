<script setup lang="ts">
import { ref } from 'vue'
import AutoComplete, { AutoCompleteCompleteEvent } from 'primevue/autocomplete'

const props = defineProps<{
  onSearch: (query: string) => Array<string>
  categories: Array<string>
}>()

const searchText = ref<string>()
const suggestions = ref<Array<string>>([])

const complete = async (event: AutoCompleteCompleteEvent): Promise<void> => {
  suggestions.value = await props.onSearch(event.query || '')
}
</script>

<template>
  <div class="flex border-x border-y border-[#D9D9D9] rounded-[4px] w-[345px]">
    <AutoComplete
      v-model="searchText"
      :suggestions="suggestions"
      dropdown
      inputToken="All categories"
      placeholder="Search Products"
      @complete="complete"
      :pt="{
        root: {
          class: ['inline-flex text-surface-900 leading-10 flex-auto'],
        },
        input: {
          class: [
            'h-[40px] outline-none flex-auto rounded-[4px]',
            'appearance-none text-surface-700 mr-x',
            'px-3 text-[#9D9D9D]',
          ],
        },
        dropdownbutton: {
          root: {
            class: [
              'leading-none text-nowrap  h-[40px]',
              'focus:outline-none focus:outline-offset-0',
              'flex items-center justify-center',
            ],
          },
        },
      }"
    >
      <template #dropdownicon>
        <span class="text-justify">All categories</span>
        <span class="pi pi-angle-down px-2"></span>
        <span class="w-1 h-2/3 border-l border-[#D9D9D9]" />
      </template>

      <template #loadingicon><span></span></template>
    </AutoComplete>
    <span class="pi pi-search pl-2 pr-4 h-[40px] flex items-center" />
  </div>
</template>
