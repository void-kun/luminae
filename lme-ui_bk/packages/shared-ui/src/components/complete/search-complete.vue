<template>
  <AutoComplete
    v-model="searchText"
    :suggestions="items"
    :placeholder="placeholder"
    @complete="search"
    @item-select="selectItem"
    @keyup.enter="selectItem"
    dropdown />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AutoComplete, { AutoCompleteCompleteEvent, AutoCompleteItemSelectEvent } from 'primevue/autocomplete';

const props = defineProps<{
  select: string;
  placeholder?: string;
  searchItems: (query?: string) => Array<string>;
  onSearch: (searchText: string) => void;
}>();

const searchText = ref<string>();
const items = ref<Array<string>>([]);

const search = async (event: AutoCompleteCompleteEvent) => {
  items.value = await props.searchItems(event.query);
};

const selectItem = (_event: AutoCompleteItemSelectEvent) => {
  props.onSearch(searchText.value || '');
};
</script>
