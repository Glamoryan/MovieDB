<script setup lang="ts">
import { ref } from 'vue'
import CardItem from './CardItem.vue'

const movies = ref([])
const currentSelection = ref('popular')

const fetchMovies = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    movies.value = data
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

fetchMovies('http://localhost:3004/popularMovies')
</script>

<template>
  <div class="recommender-wrapper mt-4 ml-4">
    <div class="header flex items-center">
      <div class="title">What's Popular</div>
      <div class="selectors flex">
        <div
          class="selector popular"
          :class="{ current: currentSelection === 'popular' }"
          @click="
            () => {
              fetchMovies('http://localhost:3004/popularMovies')
              currentSelection = 'popular'
            }
          "
        >
          Popular
        </div>
        <div
          class="selector top-rated"
          :class="{ current: currentSelection === 'top-rated' }"
          @click="
            () => {
              fetchMovies('http://localhost:3004/topRatedMovies')
              currentSelection = 'top-rated'
            }
          "
        >
          Top Rated
        </div>
      </div>
    </div>
    <div class="content flex">
      <CardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
