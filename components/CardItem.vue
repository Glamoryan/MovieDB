<script>
import { useStore } from '@/components/store';

export default {
  props: {
    movie: Object
  },
  setup(props) {
    const store = useStore();
    const isFavorite = computed(() => store.isFavorite(props.movie));
    const router = useRouter();

    const toggleFavorite = () => {
      store.toggleFavorite(props.movie);
    };

    const redirectToMovieDetail = () => {
      router.push({
        path: `/movies/${ props.movie.id }`,
        query: {
          movie: JSON.stringify(props.movie)
        }
      });
    };

    return { isFavorite, toggleFavorite, redirectToMovieDetail };
  },
  methods: {
    getImageUrl() {
      return `https://image.tmdb.org/t/p/w220_and_h330_face/${this.movie.poster_path}`;
    }
  }
}
</script>

<template>
  <div class="item-card mt-6" @click="redirectToMovieDetail">
    <img class="image rounded-xl" :src="getImageUrl()" alt="item-image" />
    <div class="rating text-center">{{ movie.vote_average.toFixed(1) }}</div>
    <div class="title">{{ movie.title }}</div>
    <div class="date">{{ movie.release_date }}</div>
    <button @click.stop="toggleFavorite" class="favorite-button">
      <font-awesome-icon :icon="isFavorite ? ['fas', 'star'] : ['far', 'star']" />
    </button>
  </div>
</template>
