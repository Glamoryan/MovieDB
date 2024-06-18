<script setup lang="ts">
import { ref, watch } from 'vue';
import NavItem from '~/components/NavItem.vue';
import PageContentView from '~/components/layouts/PageContentView.vue';
import SideBarView from '~/components/layouts/SideBarView.vue';
import { fetchMovies } from '~/components/functions/movie';

const tvShows = ref([]);
const selectedSort = ref('desc');
const selectedFilter = ref('10759');

const fetchPopularShows = async () => {
  const popularEndpoint = `https://api.themoviedb.org/3/discover/tv?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.${ selectedSort.value }&with_genres=${ selectedFilter.value }`;

  tvShows.value = await fetchMovies(popularEndpoint);
}

watch([selectedSort, selectedFilter], () => {
  fetchPopularShows();
});

fetchPopularShows();
</script>

<template>
  <NavItem/>
  <div class="main-container flex flex-row p-5">
    <SideBarView :genres="{ action: '10759', comedy: '35' }" :page-title="'Popular'" :selected-sort="selectedSort" :selected-filter="selectedFilter" @update-sort="selectedSort = $event" @update-filter="selectedFilter = $event" />
    <PageContentView :movies="tvShows" />
  </div>
</template>