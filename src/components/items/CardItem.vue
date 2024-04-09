<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {
      isFavorite: false
    };
  },
  created() {
    this.checkFavoriteStatus();
  },
  methods: {
    toggleFavorite() {
      console.log('Favori fonksiyonu çağrıldı.');
      this.$store.dispatch('toggleFavorite', this.movie);
      this.isFavorite = !this.isFavorite;
    },
    checkFavoriteStatus() {
      this.isFavorite = this.$store.getters.isFavorite(this.movie);
    },
    getImageUrl() {
      return `https://image.tmdb.org/t/p/w220_and_h330_face/${this.movie.poster_path}`;
    }
  }
}
</script>

<template>
  <div class="item-card mt-6">
    <img class="image rounded-xl" :src="getImageUrl()" alt="item-image" />
    <div class="rating text-center">{{ movie.vote_average.toFixed(1) }}</div>
    <div class="title">{{ movie.title }}</div>
    <div class="date">{{ movie.release_date }}</div>
    <button @click="toggleFavorite" class="favorite-button">
      <font-awesome-icon :icon="isFavorite ? ['fas', 'star'] : ['far', 'star']" />
    </button>
  </div>
</template>
