import { createRouter, createWebHistory } from 'vue-router'
import ToDosView from './../views/ToDosView.vue'
import AboutViewVue from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDosView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutViewVue
    },
  
  ]
})

export default router
