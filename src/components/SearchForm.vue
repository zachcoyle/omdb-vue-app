<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { search } from '../api'
const query = ref('')
</script>

<template>
  <!-- TODO: turn this into a proper form -->
  <span class="p-input">
    <InputText v-model="query" placeholder="Search" />
    <Button v-on:click="search(query)" label="Search" />
  </span>
</template>
