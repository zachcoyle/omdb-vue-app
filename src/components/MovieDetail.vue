<script setup>
import { ref} from 'vue'
import Card from 'primevue/card'
import Rating from 'primevue/rating';

const props = defineProps(['movie'])
const ratingValue = ref(props.movie?.imdbRating)
</script>

<template>
  <img alt="user header" :src="props.movie?.Poster" />
  <Card style="width: 25em">
    <template #header>

    </template>
    <template #title>{{ props.movie?.Title }} ({{ props.movie?.Year }})</template>
    <template #subtitle> Rating: {{ props.movie?.Rated}}</template>
    <template #content>
        <p>
            {{ props.movie?.Plot }}
        </p>
    </template>
    <template #footer>
      <div>Directed By: {{ props.movie?.Director}}</div>
      <div>Featuring: {{ props.movie?.Actors}}</div>
      <!-- TODO: fix the following lint error -->
      <div>{{ ratingValue }}<Rating :stars="10" v-model="props.movie.imdbRating" readonly ><template #cancelicon><div /></template></Rating></div>
    </template>
</Card>
</template>