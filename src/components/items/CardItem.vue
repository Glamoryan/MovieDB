<script>
export default {
  props: {
    movie: Object
  }
}
</script>

<template>
  <div class="item-card mt-6">
    <img class="image rounded-xl" :src="`https://image.tmdb.org/t/p/w220_and_h330_face/${ movie.poster_path }`" alt="item-image" />
    <div class="rating text-center">{{ movie.vote_average.toFixed(1) }}</div>
    <div class="title">{{ movie.title }}</div>
    <div class="date">{{ movie.release_date }}</div>
  </div>
</template>
