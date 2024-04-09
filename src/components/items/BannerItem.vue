<template>
  <div class="banner-main">
    <div class="banner-content">
      <div class="title">
        <span class="content-title">Welcome.</span>
        Millions of movies, TV shows and people to discover. Explore now.
      </div>
      <div class="search flex">
        <input @input="updateSearchTerm" v-model="searchTerm" class="rounded-md" type="text" name="" id="" />
        <button class="rounded-3xl">Search</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { debounce } from 'lodash';

const emits = defineEmits(['update-search']);

const searchTerm = ref('');

const emitSearchTerm = debounce((term) =>{
  emits('update-search', term);
}, 500);

const updateSearchTerm = (event) => {
  searchTerm.value = event.target.value;

  if (searchTerm.value.length >= 3) {
    emitSearchTerm(searchTerm.value);
  }
}
</script>