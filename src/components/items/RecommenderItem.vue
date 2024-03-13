<script setup lang="ts">
import CardItem from './CardItem.vue'
</script>

<template>
  <div class="recommender-wrapper">
    <div class="header">
      <div class="title">What's Popular</div>
      <div class="selectors">
        <div class="selector current">Popular</div>
        <div class="selector">Top Rated</div>
      </div>
    </div>
    <div class="content">
      <CardItem />
    </div>
  </div>
</template>
