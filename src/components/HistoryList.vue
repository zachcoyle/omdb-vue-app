<template>
  <div class="history-list">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in items" :key="item.id" class="list-item">
        {{ item.Title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
.history-list {
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  padding: 16px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>
