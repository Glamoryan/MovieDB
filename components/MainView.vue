<template>
  <NavItem />
  <BannerItem @update-search="handleSearch" />
  <RecommenderItem :search-term="searchTerm" />
</template>

<script setup>
import { ref } from 'vue'

const searchTerm = ref('');

const handleSearch = (term) => {
  searchTerm.value = term;
};
</script>
