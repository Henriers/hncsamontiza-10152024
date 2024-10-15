<template>
  <div>
    <h1>Kanban Board</h1>
    <div>
      <input
        v-model="taskName"
        placeholder="Task Name"
        @input="validateName"
      />
      <span v-if="nameError" style="color: red;">{{ nameError }}</span>
      <span>{{ taskName.length }} / {{ MAX_NAME_LENGTH }} characters</span>

      <textarea
        v-model="taskDescription"
        placeholder="Task Description"
        @input="validateDescription"
      ></textarea>
      <span v-if="descriptionError" style="color: red;">{{ descriptionError }}</span>
      <span>{{ taskDescription.length }} / {{ MAX_DESCRIPTION_LENGTH }} characters</span>

      <select v-model="taskStatus">
        <option>TO DO</option>
        <option>IN PROGRESS</option>
        <option>DONE</option>
      </select>

      <button :disabled="!isFormValid" @click="addTask">Add Task</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>
            <span v-if="!task.isEditing">{{ task.name }}</span>
            <input v-if="task.isEditing" v-model="task.name" />
          </td>
          <td>
            <span v-if="!task.isEditing">{{ task.description }}</span>
            <textarea v-if="task.isEditing" v-model="task.description"></textarea>
          </td>
          <td>
            <span v-if="!task.isEditing">{{ task.status }}</span>
            <select v-if="task.isEditing" v-model="task.status">
              <option>TO DO</option>
              <option>IN PROGRESS</option>
              <option>DONE</option>
            </select>
          </td>
          <td>
            <button @click="toggleEdit(task)">
              {{ task.isEditing ? 'Save' : 'Edit' }}
            </button>
            <button @click="removeTask(task.id)" v-if="!task.isEditing">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const tasks = ref([]);
const taskName = ref('');
const taskDescription = ref('');
const taskStatus = ref('TO DO');
const nameError = ref('');
const descriptionError = ref('');

const MAX_NAME_LENGTH = 250;
const MAX_DESCRIPTION_LENGTH = 1000;

const validateName = () => {
  if (taskName.value.length > MAX_NAME_LENGTH) {
    nameError.value = `Task name must not exceed ${MAX_NAME_LENGTH} characters.`;
  } else {
    nameError.value = '';
  }
};

const validateDescription = () => {
  if (taskDescription.value.length > MAX_DESCRIPTION_LENGTH) {
    descriptionError.value = `Task description must not exceed ${MAX_DESCRIPTION_LENGTH} characters.`;
  } else {
    descriptionError.value = '';
  }
};

const isFormValid = computed(() => {
  return (
    taskName.value.length > 0 &&
    taskName.value.length <= MAX_NAME_LENGTH &&
    !nameError.value &&
    (!taskDescription.value || taskDescription.value.length <= MAX_DESCRIPTION_LENGTH) &&
    !descriptionError.value
  );
});

const addTask = () => {
  const newTask = {
    id: Date.now(),
    name: taskName.value,
    description: taskDescription.value || null,
    status: taskStatus.value,
    isEditing: false,
  };

  tasks.value.push(newTask);
  resetForm();
};

const updateTask = (task) => {
};

const toggleEdit = (task) => {
  task.isEditing = !task.isEditing;
  if (!task.isEditing) {
    updateTask(task);
  }
};

const removeTask = (taskId) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId);
};

const resetForm = () => {
  taskName.value = '';
  taskDescription.value = '';
  taskStatus.value = 'TO DO';
  nameError.value = '';
  descriptionError.value = '';
};
</script>

<style scoped>
table {
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: white;
}
</style>
