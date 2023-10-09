<script setup>
import { RouterLink } from 'vue-router'
import SearchForm from '../components/SearchForm.vue'
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <span class="pi pi-thumbs-up" /><span class="pi pi-thumbs-up" />
      <h1>Movie App</h1>
    </div>
    <nav class="nav-links">
      <RouterLink to="/">Search Results</RouterLink>
      <RouterLink to="/history">History</RouterLink>
      <SearchForm />
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #35495e;
  color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  width: 50px;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff6b6b;
}
</style>
