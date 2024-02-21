import { Router, RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import AppLayout from '@/layout/app-layout.vue';
import LandingView from '@/views/landing-view.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: LandingView
      },
      {
        path: '/filter/:category/:sub_category',
        component: () => import('@/views/landing-view.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/notfound-view.vue')
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
