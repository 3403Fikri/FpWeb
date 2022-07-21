import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeView.vue'
import KatalogView from '../views/KatalogView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },{
      path: '/katalog',
      name: 'katalog',
      component: KatalogView
    }
  ]
})

export default router
