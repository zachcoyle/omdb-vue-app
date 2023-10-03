<template>
  <!-- TODO: Styling -->
  <div>
  <h1>{{ this.$store.getters.current.Title}}</h1>
  <h2>({{ this.$store.getters.current.Year}})</h2>
  </div>
  <div>Directed By: {{ this.$store.getters.current.Director}}</div>
  <div>Featuring: {{ this.$store.getters.current.Actors}}</div>
  <div v-if="this.$store.getters.current.MetaScore">MetaScore: {{ this.$store.getters.current.MetaScore }}</div>
  <img v-if="this.$store.getters.current.Poster" v-bind:src="this.$store.getters.current.Poster" />
</template>