import { createStore } from 'vuex';

const store = createStore({
  state: {
    favoriteMovies: []
  },
  mutations: {
    toggleFavorite(state, movie) {
      const index = state.favoriteMovies.findIndex(item => item.id === movie.id);

      if (index === -1) {
        state.favoriteMovies.push(movie);
      } else {
        state.favoriteMovies.splice(index, 1);
      }

      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    },
    loadFavorites(state) {
      const favorites = localStorage.getItem('favoriteMovies');

      if (favorites) {
        state.favoriteMovies = JSON.parse(favorites);
      }
    }
  },
  actions: {
    toggleFavorite({ commit }, movie) {
      commit('toggleFavorite', movie);
    }
  },
  getters: {
    isFavorite: state => movie => state.favoriteMovies.some(item => item.id === movie.id)
  }
});

export default store;

store.commit('loadFavorites');