<script setup lang="ts">
import { ref, watch, onMounted, defineProps } from 'vue'
import CardItem from './CardItem.vue'

const props = defineProps({
  searchTerm: String
});

const movies = ref([]);
const currentSelection = ref('popular')
const popularEndpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const topRatedEndpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'

const fetchMovies = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    movies.value = data.results
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

const fetchPopularMovies = () => {
  fetchMovies(popularEndpoint);
  currentSelection.value = 'popular';
}

const fetchTopRatedMovies = () => {
  fetchMovies(topRatedEndpoint);
  currentSelection.value = 'top-rated';
}

watch(() => props.searchTerm, (newTerm) => {
  if (newTerm && newTerm.length >= 3) {
    fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&query=${ newTerm }&include_adult=false&language=en-US&page=1`);
  } else {
    fetchPopularMovies();
  }
});

onMounted(() => {
  fetchPopularMovies();
});
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
      <CardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
