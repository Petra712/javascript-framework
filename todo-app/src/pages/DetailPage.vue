<template>
    <div class="detail">
      <h1>Task Details</h1>
  
      <div v-if="task">
        <div class="task-info">
          <div class="task-title">{{ task.title }}</div>
          <div class="task-date">
            Due: {{ formatDate(task.dueDate) }}
          </div>
          <div class="task-status">
            Status: {{ task.completed ? 'Completed' : 'Pending' }}
          </div>
        </div>
  
        <button 
          @click="completeTask" 
          :disabled="task.completed"
          class="complete-btn"
        >
          {{ task.completed ? 'Completed' : 'Mark as Done' }}
        </button>
      </div>
  
      <button class="back-btn" @click="$router.push('/')">
        Back to Overview
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { useTasksStore } from '../store/tasks';
  import { computed } from 'vue';
  
  const route = useRoute();
  const router = useRouter();
  const store = useTasksStore();
  
  const task = computed(() =>
    store.tasks.find((t) => t.id === Number(route.params.id))
  );
  
  const completeTask = () => {
    if (task.value) {
      store.finishTask(task.value.id);
      router.push('/'); // Go back to overview after marking as done
    }
  };
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  </script>
  
  <style scoped lang="scss">
  .detail {
    padding: 20px;
  
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
  
    .task-info {
      margin-bottom: 16px;
  
      .task-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
      }
  
      .task-date,
      .task-status {
        font-size: 16px;
        color: #555;
        margin-bottom: 4px;
      }
    }
  
    .complete-btn {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin-bottom: 12px;
  
      &:hover {
        background-color: #45a049;
      }
  
      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  
    .back-btn {
      background-color: #ccc;
      color: #333;
      padding: 10px 16px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s ease;
  
      &:hover {
        background-color: #bbb;
      }
    }
  }
  </style>
  