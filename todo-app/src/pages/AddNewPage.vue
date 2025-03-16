<template>
    <div class="add-new">
      <h1>Add New Task</h1>
  
      <form @submit.prevent="addTask">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" required />
        </div>
  
        <div class="form-group">
          <label for="dueDate">Due Date</label>
          <input type="date" id="dueDate" v-model="dueDate" required />
        </div>
  
        <button type="submit">Add Task</button>
      </form>
  
      <button class="cancel-btn" @click="$router.push('/')">Cancel</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useTasksStore } from '../store/tasks';
  
  const title = ref('');
  const dueDate = ref('');
  const router = useRouter();
  const store = useTasksStore();
  
  const addTask = () => {
    if (title.value && dueDate.value) {
      store.addTask({
        id: Date.now(),
        title: title.value,
        dueDate: dueDate.value,
        completed: false
      });
  
      // Reset the form fields
      title.value = '';
      dueDate.value = '';
  
      // Redirect to the overview page
      router.push('/');
    }
  };
  </script>
  
  <style scoped lang="scss">
  .add-new {
    padding: 20px;
  
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
  
    .form-group {
      margin-bottom: 12px;
  
      label {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        color: #555;
      }
  
      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 16px;
        box-sizing: border-box;
      }
    }
  
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s ease;
  
      &:hover {
        background-color: #45a049;
      }
    }
  
    .cancel-btn {
      background-color: #ccc;
      margin-top: 10px;
  
      &:hover {
        background-color: #bbb;
      }
    }
  }
  </style>
  