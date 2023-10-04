<script setup>
import MovieDetail from '../components/MovieDetail.vue';
import SearchForm from '../components/SearchForm.vue';
</script>

<template>
  <main>
    <div class="movie-details">
        <SearchForm />
        <MovieDetail :movie="this.$store.getters.current" />
    </div>
  </main>
</template>

<style scoped>
  .movie-details { 
    display: flex;
    grid-template-columns: auto;
    
  }

  .pane {
    padding: 10px;
  }
</style>
