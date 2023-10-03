<script>
</script>

<template>
  <main>
    {{ this.$store.getters.current.Title}}
    {{ this.$store.getters.current.Year}}
    {{ this.$store.getters.current.Director}}
    {{ this.$store.getters.current.Actors}}
    {{ this.$store.getters.current.MetaScore}}
    <img v-bind:src="this.$store.getters.current.Poster" />
    
  </main>
</template>
