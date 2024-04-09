<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { throttle } from 'lodash'
import CardItem from './CardItem.vue'

const movies = ref([]);
const searchTerm = ref('god');
const filteredMovies = ref([]);
const currentSelection = ref('popular')
const popularEndpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const topRatedEndpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'

const fetchMovies = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    movies.value = data.results
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

const throttleSearchMovies = throttle((term: string) => {
  if (!term) {
    filteredMovies.value = movies.value;

    return;
  }

  filteredMovies.value = movies.value.filter(movie => {
    return movie.title.toLowerCase().includes(term.toLowerCase());
  });
}, 500);

const handleSearch = (term: string) => {
  searchTerm.value = term;

  throttleSearchMovies(term);
}

const fetchPopularMovies = () => {
  fetchMovies(popularEndpoint);

  currentSelection.value = 'popular';
}

const fetchTopRatedMovies = () => {
  fetchMovies(topRatedEndpoint);

  currentSelection.value = 'top-rated';
}

onMounted(() => {
  fetchPopularMovies();
});

watch(searchTerm, handleSearch);
</script>

<template>
  <div class="recommender-wrapper mt-4 ml-4">
    <div class="header flex items-center">
      <div class="title">What's Popular</div>
      <div class="selectors flex">
        <div
          class="selector popular"
          :class="{ current: currentSelection === 'popular' }"
          @click="fetchPopularMovies">Popular
        </div>
        <div
          class="selector top-rated"
          :class="{ current: currentSelection === 'top-rated' }"
          @click="fetchTopRatedMovies">Top Rated
        </div>
      </div>
    </div>
    <div class="content flex">
      <CardItem v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
