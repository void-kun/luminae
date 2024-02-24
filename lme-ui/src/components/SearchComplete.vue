<script setup lang="ts">
import { ref } from 'vue'
import AutoComplete, { AutoCompleteCompleteEvent } from 'primevue/autocomplete'
import { AutoCompleteStyle } from '@/presets/style'

const props = defineProps<{
  onSearch: (query: string) => Array<string>
  categories: Array<string>
}>()

const searchText = ref<string>()
const suggestions = ref<Array<string>>([])

const complete = async (event: AutoCompleteCompleteEvent): Promise<void> => {
  suggestions.value = await props.onSearch(event.query || '')
}

const appCompleteStyle = ref(AutoCompleteStyle)
</script>

<template>
  <div class="flex border-x border-y border-pr-border rounded-[4px] w-[345px]">
    <AutoComplete
      v-model="searchText"
      :suggestions="suggestions"
      dropdown
      inputToken="All categories"
      placeholder="Search Products"
      @complete="complete"
      :pt="appCompleteStyle"
    >
      <template #dropdownicon>
        <span class="text-justify">All categories</span>
        <span class="pi pi-angle-down px-2"></span>
        <span class="w-1 h-2/3 border-l border-pr-border" />
      </template>

      <template #loadingicon><span></span></template>
    </AutoComplete>
    <span class="pi pi-search pl-2 pr-4 h-[40px] flex items-center" />
  </div>
</template>
