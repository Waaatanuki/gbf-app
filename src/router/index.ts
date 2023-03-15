import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const Layout = () => import('@/layout/index.vue')

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'homepage' },
      },
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        meta: { hidden: true },
      },
    ],
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/evoker',
        component: () => import('@/views/evoker/index.vue'),
        name: 'Evoker',
        meta: { title: '贤者素材', icon: 'homepage' },
      },
    ],
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/guildwars',
        component: () => import('@/views/guildWars/index.vue'),
        name: 'GuildWars',
        meta: { title: '团战规划', icon: 'homepage' },
      },
    ],
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goldbrick',
        component: () => import('@/views/goldBrick/index.vue'),
        name: 'GoldBrick',
        meta: { title: '猎金统计', icon: 'homepage' },
      },
    ],
  },
  {
    path: '/calculator',
    component: Layout,
    redirect: '/calculator/gacha',
    meta: {
      title: '计算器',
      icon: 'homepage',
      alwaysShow: true,
    },
    children: [
      {
        path: '/calculator/gacha',
        component: () => import('@/views/calculator/gacha/index.vue'),
        name: 'GachaCalc',
        meta: { title: '攒井计算器', icon: 'menu' },
      },
      {
        path: '/calculator/token',
        component: () => import('@/views/calculator/token/index.vue'),
        name: 'TokenCalc',
        meta: { title: '战货计算器', icon: 'menu' },
      },
      {
        path: '/calculator/bullet',
        component: () => import('@/views/calculator/bullet/index.vue'),
        name: 'BulletCalc',
        meta: { title: '子弹计算器', icon: 'menu' },
      },
      {
        path: '/calculator/crit',
        component: () => import('@/views/calculator/crit/index.vue'),
        name: 'CritCalc',
        meta: { title: '暴击计算器', icon: 'menu' },
      },
    ],
  },
  {
    path: '/nga',
    component: Layout,
    redirect: '/nga/team',
    meta: {
      title: 'NGA模版',
      icon: 'homepage',
      alwaysShow: true,
    },
    children: [
      {
        path: '/nga/teamShare',
        component: () => import('@/views/nga/teamShare/index.vue'),
        name: 'TeamShare',
        meta: { title: '打牛', icon: 'menu' },
      },
      {
        path: '/nga/newCharacter',
        component: () => import('@/views/nga/newCharacter/index.vue'),
        name: 'NewCharacter',
        meta: { title: '新角色', icon: 'menu' },
      },
      {
        path: '/nga/schedule',
        component: () => import('@/views/nga/schedule/index.vue'),
        name: 'Schedule',
        meta: { title: '日程', icon: 'menu' },
      },
      {
        path: '/nga/composeBuild',
        component: () => import('@/views/nga/composeBuild/index.vue'),
        name: 'ComposeBuild',
        meta: { title: '生成配置', icon: 'menu' },
      },
    ],
  },
  {
    path: '',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/evokerDataMaker',
        component: () => import('@/views/evokerDataMaker/index.vue'),
        name: 'EvokerDataMaker',
        meta: { title: '素材编辑', icon: 'homepage' },
      },
    ],
  },
  // {
  //   path: '',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/playground',
  //       component: () => import('@/views/playground/index.vue'),
  //       name: 'Playground',
  //       meta: { title: 'Playground', icon: 'homepage' },
  //     },
  //   ],
  // },
  //   {
  //     path: '/evokerDataMaker',
  //     component: () => import('@/views/evokerDataMaker/index.vue'),
  //   },
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
