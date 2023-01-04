import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/evoker',
    component: () => import('@/views/evoker/index.vue'),
  },
  {
    path: '/guildwars',
    component: () => import('@/views/guildWars/index.vue'),
  },
  {
    path: '/goldbrick',
    component: () => import('@/views/goldBrick/index.vue'),
  },
  {
    path: '/critCalc',
    component: () => import('@/views/calculator/crit/index.vue'),
  },
  {
    path: '/gachaCalc',
    component: () => import('@/views/calculator/gacha/index.vue'),
  },
  {
    path: '/tokenCalc',
    component: () => import('@/views/calculator/token/index.vue'),
  },
  {
    path: '/tools',
    component: () => import('@/views/tools/index.vue'),
  },
  {
    path: '/playground',
    component: () => import('@/views/playground/index.vue'),
  },
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
