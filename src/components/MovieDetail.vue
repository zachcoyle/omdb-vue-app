<script setup>
import Card from 'primevue/card'
import Rating from 'primevue/rating'

const props = defineProps(['movie'])
</script>

<template>
  <div v-if="props.movie" class="movie-detail">
    <img class="poster" :alt="movie?.Title" :src="props.movie?.Poster" />
    <Card style="width: 30em">
      <template #header> </template>
      <template #title>{{ props.movie?.Title }} ({{ props.movie?.Year }})</template>
      <template #subtitle> Rating: {{ props.movie?.Rated }}</template>
      <template #content>
        <p>
          {{ props.movie?.Plot }}
        </p>
      </template>
      <template #footer>
        <div>Directed By: {{ props.movie?.Director }}</div>
        <div>Featuring: {{ props.movie?.Actors }}</div>
        <!-- TODO: fix the following lint error -->
        <div class="rating">
          <Rating :stars="10" v-model="props.movie.imdbRating" readonly
            ><template #cancelicon><div /></template
          ></Rating>
        </div>
      </template>
    </Card>
  </div>
  <h1 v-else class="empty">Search for a Movie!</h1>
</template>

<style scoped>
.movie-detail {
  display: flex;
}
.poster {
  margin: 5px;
}

.empty {
  margin: 10px;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
</style>
