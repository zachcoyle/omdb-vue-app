<template>
  <div class="about">
    <h1>History</h1>
    <ul v-if="this.$store.getters.history.length > 0">
      <li v-for="(movie, index) in this.$store.getters.history" :key="index">{{ movie.Title }}</li>
    </ul>
    <h2 v-else>No search history</h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
