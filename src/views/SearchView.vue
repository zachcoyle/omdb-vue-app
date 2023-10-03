<script setup>
import { ref } from 'vue'

import { search } from '../api'

const query = ref("")
</script>

<template>
  <main>
    <!-- TODO: turn this into a proper form and extract it -->
    <div>
      <input v-model="query" type="text" placeholder="Search">
      <button v-on:click="search(query)" class="btn btn-primary">Search</button>
    </div>

    <!-- TODO: turn into movie component -->
    <!-- TODO: Styling -->
    <div>
    <h1>{{ this.$store.getters.current.Title}}</h1>
    <h2>({{ this.$store.getters.current.Year}})</h2>
    </div>
    <div>Directed By: {{ this.$store.getters.current.Director}}</div>
    <div>Featuring: {{ this.$store.getters.current.Actors}}</div>
    <div v-if="this.$store.getters.current.MetaScore">MetaScore: {{ this.$store.getters.current.MetaScore }}</div>
    <img v-if="this.$store.getters.current.Poster" v-bind:src="this.$store.getters.current.Poster" />
  </main>
</template>
