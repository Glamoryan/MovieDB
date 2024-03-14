<template>
  <div class="nav-bar flex items-center justify-between">
    <div class="section-left flex items-center">
      <img src="../../assets/images/logo.svg" alt="logo" class="logo" />
      <div class="nav-link flex items-center ml-4">
        <div class="nav-link-item"><RouterLink to="/">Movies</RouterLink></div>
        <div class="nav-link-item">TV Shows</div>
        <div class="nav-link-item">People</div>
        <div class="nav-link-item">More</div>
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
