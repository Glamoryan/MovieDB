<template>
    <NavItem/>
    <MovieContentView>
      <div class="content-wrapper flex flex-row gap-4 p-4">
        <img :src="getImageUrl(movie.poster_path)" alt="Poster">
        <div class="information">
          <h1 class="mb-4">{{ movie.title }}</h1>
          <div class="rate-container flex items-center gap-2 mb-4">
            <div class="circular-progress" :style="circularProgressStyle">
              <div class="percentage-text">{{ formattedVoteAverage }}</div>
            </div>
            <p>User Score: <span>{{ movie.vote_average }}</span></p>
          </div>
          <div class="overview mb-4">
            <span class="mb-3">Overview</span>
            {{ movie.overview }}
          </div>
          <div class="other-information mb-4">
            <h3 class="mb-3">Other Information</h3>
            <p>Release Date: <span>{{ movie.release_date }}</span></p>
          </div>
          <button @click="toggleFavorite">
            <font-awesome-icon :icon="isFavorite ? ['fas', 'star'] : ['far', 'star']" /> Add to Favorite
          </button>
        </div>
      </div>
      <div class="actors">
        <h3>Actors</h3>
        <ul>
          <li v-for="actor in actors" :key="actor">{{ actor }}</li>
        </ul>
      </div>
    </MovieContentView>
  </template>
  
  <script>
  import MovieContentView from '~/components/layouts/MovieContentView.vue';
  import { useStore } from '~/components/store';

  export default {
    components: {
      MovieContentView
    },
    data() {
      const store = useStore();
      const route = useRoute();
      const isFavorite = computed(() => store.isFavorite(movie));
      const movie = route.query.movie ? JSON.parse(route.query.movie) : {};

      const toggleFavorite = () => {
        store.toggleFavorite(movie);
      };

      return {
        movie: {},
        actors: [],
        toggleFavorite,
        isFavorite
      };
    },
    created() {
      const route = useRoute();
      const movieData = route.query.movie ? JSON.parse(route.query.movie) : {};

      this.movie = movieData;
      this.actors = movieData.actors || [];
    },
    computed: {
    circularProgressStyle() {
      const percentage = (this.movie.vote_average / 10) * 100;

      return {
        background: `conic-gradient(#4caf50 0% ${percentage}%, #ddd ${percentage}% 100%)`
      };
    },
    formattedVoteAverage() {
      return this.movie.vote_average.toFixed(1);
    }
  },
    methods: {
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/w500${path}`;
      }
    }
  };
  </script>
  