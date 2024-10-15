import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);

  const addTask = (task) => {
    tasks.value.push(task);
  };

  const updateTask = (updatedTask) => {
    const index = tasks.value.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
    }
  };

  const removeTask = (taskId) => {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  };

  return { tasks, addTask, updateTask, removeTask };
});
