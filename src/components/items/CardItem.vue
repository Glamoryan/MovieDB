<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  movie: Object
})
</script>

<template>
  <div class="item-card mt-6">
    <img class="image rounded-xl" :src="movie.imageUrl" alt="item-image" />
    <div class="rating text-center">{{ movie.rating }}</div>
    <div class="title">{{ movie.title }}</div>
    <div class="date">{{ movie.date }}</div>
  </div>
</template>
