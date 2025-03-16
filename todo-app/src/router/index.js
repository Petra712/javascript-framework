import { createRouter, createWebHistory } from 'vue-router';
import OverviewPage from '../pages/OverviewPage.vue';
import DetailPage from '../pages/DetailPage.vue';
import AddNewPage from '../pages/AddNewPage.vue';

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: OverviewPage
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage
  },
  {
    path: '/add',
    name: 'AddNew',
    component: AddNewPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
