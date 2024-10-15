<template>
  <div id="app">
    <header>
      <h1>Kanban Board Application</h1>
    </header>
    <main>
      <KanbanBoard />
    </main>
  </div>
</template>

<script setup lang="ts">
import KanbanBoard from './components/Kanban.vue';
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lavender;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
