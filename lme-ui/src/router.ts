import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: HomeView,
      },
      {
        path: '/about',
        component: () => import('@/views/DetailView.vue'),
      },
      {
        path: '/blog',
        component: () => import('@/views/DetailView.vue'),
      },
      {
        path: '/contact',
        component: () => import('@/views/DetailView.vue'),
      },
      {
        path: '/support',
        component: () => import('@/views/DetailView.vue'),
      },
      {
        path: '/details',
        component: () => import('@/views/DetailView.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
