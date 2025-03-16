<template>
    <div class="overview">
      <h1>Tasks</h1>
  
      <!-- Filter Section -->
      <div class="filter-section">
        <button @click="filter = 'all'">All</button>
        <button @click="filter = 'not-done'">Not Done</button>
      </div>
  
      <!-- Task List -->
      <ul>
        <li 
          v-for="task in filteredTasks" 
          :key="task.id" 
          @click="$router.push(`/detail/${task.id}`)"
          :class="{ completed: task.completed }"
        >
          <div class="task-title">{{ task.title }}</div>
          <div class="task-date">{{ formatDate(task.dueDate) }}</div>
        </li>
      </ul>
  
      <!-- Add Task Button -->
      <button class="add-btn" @click="$router.push('/add')">+</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useTasksStore } from '../store/tasks';
  
  const store = useTasksStore();
  const filter = ref('all');
  
  const filteredTasks = computed(() => {
    // Sort by urgency (earliest due date first)
    const sortedTasks = [...store.tasks].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
  
    if (filter.value === 'not-done') {
      return sortedTasks.filter(task => !task.completed);
    }
    return sortedTasks;
  });
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  </script>
  
  <style scoped lang="scss">
  .overview {
    padding: 20px;
  
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
  
    .filter-section {
      display: flex;
      gap: 10px;
      margin-bottom: 12px;
  
      button {
        padding: 6px 12px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s ease;
  
        &:hover {
          background-color: #ddd;
        }
      }
    }
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
  
      li {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        transition: background-color 0.2s ease;
  
        &:hover {
          background-color: #f9f9f9;
        }
  
        &.completed {
          text-decoration: line-through;
          color: #aaa;
        }
      }
    }
  
    .add-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s ease;
  
      &:hover {
        background-color: #45a049;
      }
    }
  }
  </style>
  