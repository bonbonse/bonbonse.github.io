import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
    {
      path: '/',
      name: 'mainView',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/projects',
      name: 'projectsView',
      component: () => import('../views/ProjectsView.vue')
    },
  ],
})

export default router
