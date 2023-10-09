<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <header>
    <AppHeader />
    <div class="wrapper"></div>
  </header>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
