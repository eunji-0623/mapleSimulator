import { createRouter, createWebHistory } from 'vue-router'
import home from '/src/components/home.vue'
import royal from '@/components/royal.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/royal',
    component: royal,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
