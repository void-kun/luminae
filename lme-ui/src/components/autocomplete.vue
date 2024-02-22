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
    :pt="{}"
  >
    <template #dropdownicon> </template>
  </AutoComplete>
</template>
