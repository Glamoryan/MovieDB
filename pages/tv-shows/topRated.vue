<script setup lang="ts">
import { ref, watch } from 'vue';
import NavItem from '~/components/NavItem.vue';
import PageContentView from '~/components/layouts/PageContentView.vue';
import SideBarView from '~/components/layouts/SideBarView.vue';
import { fetchMovies } from '~/components/functions/movie';

const movies = ref([]);
const selectedSort = ref('desc');
const selectedFilter = ref('10759');

const fetchTopRatedMovies = async () => {
  const topRatedEndpoint = `https://api.themoviedb.org/3/discover/tv?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.${ selectedSort.value }&with_genres=${ selectedFilter.value }`;

  movies.value = await fetchMovies(topRatedEndpoint);
}

watch([selectedSort, selectedFilter], () => {
  fetchTopRatedMovies();
});

fetchTopRatedMovies();
</script>

<template>
  <NavItem/>
  <div class="main-container flex flex-row p-5">
    <SideBarView :genres="{ action: '10759', comedy: '35' }" :page-title="'Top Rated'" :selected-sort="selectedSort" :selected-filter="selectedFilter" @update-sort="selectedSort = $event" @update-filter="selectedFilter = $event" />
    <PageContentView :movies="movies" />
  </div>
</template>