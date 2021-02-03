import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/base/index.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/welcome/index.vue'),
      },
      {
        path: '/study',
        name: 'Study',
        component: () => import('@/views/study/index.vue'),
      },
      {
        path: '/game',
        name: 'Game',
        component: () => import('@/views/game/index.vue'),
      },
      {
        path: '/life',
        name: 'Life',
        component: () => import('@/views/life/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
