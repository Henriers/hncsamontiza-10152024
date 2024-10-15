import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([]);

  const addTask = (task: Task) => {
    tasks.value.push(task);
  };

  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
    }
  };

  const removeTask = (taskId: number) => {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  };

  return { tasks, addTask, updateTask, removeTask };
});
