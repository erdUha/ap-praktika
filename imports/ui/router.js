import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Nurizat from './nurizat/nurizat.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./About.vue'),
    },
    {
      path: '/nurizat',
      name: 'nurizat',
      component: Nurizat,
    },
  ],
})
