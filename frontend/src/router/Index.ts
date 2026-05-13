import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/views/IndexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      patch: '/',
      name: Index,
      component: Index,
    },
  ],
})

export default router
