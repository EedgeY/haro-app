import { createRouter, createWebHashHistory } from 'vue-router';
import Treatment from '../views/Treatment.vue';

const routes = [
  {
    path: '/',
    name: 'Treatment',
    component: Treatment,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
