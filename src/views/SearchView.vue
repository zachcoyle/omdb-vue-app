<script setup>
import { ref } from 'vue'

import { search } from '../api'
import MovieDetail from '../components/MovieDetail.vue';

const query = ref("")
</script>

<template>
  <main>
    <!-- TODO: turn this into a proper form and extract it -->
    <div>
      <input v-model="query" type="text" placeholder="Search">
      <button v-on:click="search(query)" class="btn btn-primary">Search</button>
    </div>
    <MovieDetail :movie="this.$store.getters.current" />
  </main>
</template>
