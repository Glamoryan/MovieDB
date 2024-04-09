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
debugger
import { ref, getCurrentInstance } from 'vue'

const searchTerm = ref('');

const instance = getCurrentInstance();
const emit = instance?.emit;

const updateSearchTerm = () => {
  emit('search', searchTerm.value);
};
</script>