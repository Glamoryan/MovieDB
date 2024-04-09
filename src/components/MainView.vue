<script setup lang="ts">
import NavItem from './items/NavItem.vue'
import BannerItem from './items/BannerItem.vue'
import RecommenderItem from './items/RecommenderItem.vue'
import { ref } from 'vue'

const searchTerm = ref('');

const handleSearch = (term) => {
  searchTerm.value = term;
};
</script>

<template>
  <NavItem />
  <BannerItem @update-search="handleSearch" />
  <RecommenderItem :search-term="searchTerm" />
</template>
