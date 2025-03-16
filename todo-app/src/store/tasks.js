import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Finish Vue project',
        dueDate: '2025-03-20',
        completed: false
      },
      {
        id: 2,
        title: 'Submit assignment',
        dueDate: '2025-03-18',
        completed: true
      },
      {
        id: 3,
        title: 'Prepare presentation',
        dueDate: '2025-03-25',
        completed: false
      }
    ]
  }),

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },

    completeTask(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.completed = true;
    },

    finishTask(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
        task.completed = true;
      }
    }
    
  }
});

