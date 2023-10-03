<script setup>
import { ref } from 'vue'
import { search } from '../api'
const query = ref("")
</script>

<template>
  <!-- TODO: turn this into a proper form -->
  <!-- TODO: Styling -->
  <div>
    <input v-model="query" type="text" placeholder="Search">
    <button v-on:click="search(query)" class="btn btn-primary">Search</button>
  </div>
</template>