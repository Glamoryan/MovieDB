<script setup>
const moviesHover = ref(false);
const tvShowsHover = ref(false);
</script>

<template>
    <div class="nav-bar flex items-center justify-between">
      <div class="section-left flex items-center">
        <img src="../assets/images/logo.svg" alt="logo" class="logo" />
        <div class="nav-link flex items-center ml-4">
          <div class="nav-link-item">
            <RouterLink to="/">Homepage</RouterLink>
          </div>
          <div @mouseover="moviesHover= true; tvShowsHover= false" class="nav-link-item">
            Movies
            <div v-show="moviesHover" @mouseleave="moviesHover = false" class="under-link-container bg-white p-2 mt-2 text-slate-950 flex flex-col gap-2">
              <div class="under-link-item"><RouterLink to="/movies/popular">Popular</RouterLink></div>
              <div class="under-link-item"><RouterLink to="/movies/upcoming">Upcoming</RouterLink></div>
              <div class="under-link-item"><RouterLink to="/movies/topRated">Top Rated</RouterLink></div>
            </div>
          </div>
          <div @mouseover="tvShowsHover= true; moviesHover= false" class="nav-link-item">
            TV Shows
            <div v-show="tvShowsHover" @mouseleave="tvShowsHover = false" class="under-link-container bg-white p-2 mt-2 text-slate-950 flex flex-col gap-2">
              <div class="under-link-item"><RouterLink to="/tv-shows/popular">Popular</RouterLink></div>
              <div class="under-link-item"><RouterLink to="/tv-shows/upcoming">Upcoming</RouterLink></div>
              <div class="under-link-item"><RouterLink to="/tv-shows/topRated">Top Rated</RouterLink></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-right flex items-center">
        <div class="create-movie">+</div>
        <div class="language-selector rounded-md">EN</div>
        <div class="login">Login</div>
        <div class="join-tmdb">Join TMDB</div>
        <div class="search-icon"></div>
      </div>
    </div>
  </template>