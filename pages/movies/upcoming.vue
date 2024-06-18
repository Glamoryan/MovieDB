<script setup lang="ts">
import { ref, watch } from 'vue';
import NavItem from '~/components/NavItem.vue';
import PageContentView from '~/components/layouts/PageContentView.vue';
import SideBarView from '~/components/layouts/SideBarView.vue';
import { fetchMovies } from '~/components/functions/movie';

const movies = ref([]);
const selectedSort = ref('desc');
const selectedFilter = ref('28');

const fetchUpcomingMovies = async () => {
  const now = new Date();
  now.setDate(now.getDate() + 10);
  const inTenDays = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(now).replace(/-/g, '/');

  const upcomingEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1&sort_by=popularity.${ selectedSort.value }&release_date.gte=${ inTenDays }&with_genres=${ selectedFilter.value }`;

  movies.value = await fetchMovies(upcomingEndpoint);
}

watch([selectedSort, selectedFilter], () => {
  fetchUpcomingMovies();
});

fetchUpcomingMovies();
</script>

<template>
  <NavItem/>
  <div class="main-container flex flex-row p-5">
    <SideBarView :genres="{ action: '28', comedy: '35' }" :page-title="'Up Coming'" :selected-sort="selectedSort" :selected-filter="selectedFilter" @update-sort="selectedSort = $event" @update-filter="selectedFilter = $event" />
    <PageContentView :movies="movies" />
  </div>
</template>