<script setup>
const props = defineProps(['movie'])
</script>

<template>
  <!-- TODO: Styling -->
  <div>
  <h1>{{ props.movie?.Title}}</h1>
  <h2>({{ props.movie?.Year}})</h2>
  </div>
  <div>Directed By: {{ props.movie?.Director}}</div>
  <div>Featuring: {{ props.movie?.Actors}}</div>
  <div v-if="props.movie?.MetaScore">MetaScore: {{ props.movie?.MetaScore }}</div>
  <img v-if="props.movie?.Poster" v-bind:src="props.movie?.Poster" />
</template>