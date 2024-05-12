import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) || []
  }),
  actions: {
    toggleFavorite(movie) {
      const index = this.$state.favoriteMovies.findIndex(item => item.id === movie.id);

      if (index === -1) {
        this.$state.favoriteMovies.push(movie);
      } else {
        this.$state.favoriteMovies.splice(index, 1);
      }

      localStorage.setItem('favoriteMovies', JSON.stringify(this.$state.favoriteMovies));
    }
  },
  getters: {
    isFavorite(state) {
      return (movie) => state.favoriteMovies.some(item => item.id === movie.id);
    }
  },
  onInvalidate() {
    const favorites = localStorage.getItem('favoriteMovies');

    if (favorites) {
      this.favoriteMovies = JSON.parse(favorites);
    }
  }
});
