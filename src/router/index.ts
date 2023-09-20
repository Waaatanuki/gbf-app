import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Dashboard from '~/views/dashboard/index.vue'
import Evoker from '~/views/evoker/index.vue'
import GoldBrick from '~/views/goldBrick/index.vue'
import GachaCalc from '~/views/calculator/gacha/index.vue'
import TokenCalc from '~/views/calculator/token/index.vue'
import BulletCalc from '~/views/calculator/bullet/index.vue'
import TeamShare from '~/views/nga/teamShare/index.vue'
import NewCharacter from '~/views/nga/newCharacter/index.vue'
import Schedule from '~/views/nga/schedule/index.vue'

export const Layout = () => import('~/layout/index.vue')

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: { title: '首页', icon: 'homepage' },
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
        component: Evoker,
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
        path: '/goldbrick',
        component: GoldBrick,
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
        component: GachaCalc,
        name: 'GachaCalc',
        meta: { title: '攒井计算器', icon: 'menu' },
      },
      {
        path: '/calculator/token',
        component: TokenCalc,
        name: 'TokenCalc',
        meta: { title: '战货计算器', icon: 'menu' },
      },
      {
        path: '/calculator/bullet',
        component: BulletCalc,
        name: 'BulletCalc',
        meta: { title: '子弹计算器', icon: 'menu' },
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
        component: TeamShare,
        name: 'TeamShare',
        meta: { title: '打牛', icon: 'menu' },
      },
      {
        path: '/nga/newCharacter',
        component: NewCharacter,
        name: 'NewCharacter',
        meta: { title: '新角色', icon: 'menu' },
      },
      {
        path: '/nga/schedule',
        component: Schedule,
        name: 'Schedule',
        meta: { title: '日程', icon: 'menu' },
      },
    ],
  },
  // {
  //   path: '',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/imageCollage',
  //       component: modules['/src/views/imageCollage/index.vue'],
  //       name: 'ImageCollage',
  //       meta: { title: '图片拼接', icon: 'homepage' },
  //     },
  //   ],
  // },

  // {
  //   path: '',
  //   component: Layout,
  //   meta: { hidden: true },
  //   children: [
  //     {
  //       path: '/evokerDataMaker',
  //       component: modules['/src/views/evokerDataMaker/index.vue'],
  //       name: 'EvokerDataMaker',
  //       meta: { title: '素材编辑', icon: 'homepage' },
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/playground',
  //       component: modules['/src/views/playground/index.vue'],
  //       name: 'Playground',
  //       meta: { title: 'Playground', icon: 'homepage' },
  //     },
  //   ],
  // },
  //   {
  //     path: '/evokerDataMaker',
  //     component: modules['/src/views/evokerDataMaker/index.vue'],
  //   },
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
