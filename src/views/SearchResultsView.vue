<script setup>
import MovieDetail from '../components/MovieDetail.vue'
</script>

<template>
  <main>
    <div class="movie-details">
      <MovieDetail :movie="this.$store.getters.current" />
    </div>
  </main>
</template>

<style scoped>
.movie-details {
  display: flex;
  justify-content: center;
}
</style>
