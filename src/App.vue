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

<script lang="ts">
import { defineComponent } from 'vue';
import KanbanBoard from './components/Kanban.vue';

export default defineComponent({
  name: 'App',
  components: {
    KanbanBoard,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lavender
  
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
