<script setup>
import HistoryList from '../components/HistoryList.vue'
</script>

<template>
  <div>
    <HistoryList
      :title="this.$store.getters.history.length > 0 ? 'History' : 'No Search History'"
      :items="this.$store.getters.history"
    />
  </div>
</template>
