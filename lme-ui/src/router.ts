import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/app-layout.vue'
import HomeView from '@/views/home-view.vue'

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
        path: '/details',
        component: () => import('@/views/detail-view.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
