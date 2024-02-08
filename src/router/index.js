import { createRouter, createWebHashHistory } from 'vue-router';
import Treatment from '../views/Treatment.vue';
import LoadingPage from '../views/LoadingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LoadingPage',
    component: LoadingPage,
  },
  {
    path: '/treatment',
    name: 'Treatment',
    component: Treatment,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
