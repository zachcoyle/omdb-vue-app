<script setup>
import MovieDetail from '../components/MovieDetail.vue';
import SearchForm from '../components/SearchForm.vue';
</script>

<template>
  <main>
    <SearchForm />
    <MovieDetail :movie="this.$store.getters.current" />
  </main>
</template>
