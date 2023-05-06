import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Create from '../components/Create'
import single_choose from '../components/single_choose'
import question_bank from '../components/question_bank'
import multiple_choose from '../components/multiple_choose'
import judgement from '../components/judgement'
import Q_A_person from '../components/Q_A_person'
import insert_single from '../components/insert_single'
import insert_multiple from '../components/insert_multiple'
import insert_judgement from '../components/insert_judgement'
import insert_Q_A from '../components/insert_Q_A'

Vue.use(VueRouter)

const routes = [
  {
    //路由跳转路径
    path: '/question_bank',
    //路由名称
    name: 'question_bank',
    //路由跳转组件
    component: question_bank
  },
  {
    //路由跳转路径
    path: '/insert_single',
    //路由名称
    name: 'insert_single',
    //路由跳转组件
    component: insert_single
  },
  {
    //路由跳转路径
    path: '/insert_multiple',
    //路由名称
    name: 'insert_multiple',
    //路由跳转组件
    component: insert_multiple
  },
  {
    //路由跳转路径
    path: '/insert_judgement',
    //路由名称
    name: 'insert_judgement',
    //路由跳转组件
    component: insert_judgement
  },
  {
    //路由跳转路径
    path: '/insert_Q_A',
    //路由名称
    name: 'insert_Q_A',
    //路由跳转组件
    component: insert_Q_A
  },
  {
    //路由跳转路径
    path: '/Create',
    //路由名称
    name: 'Create',
    //路由跳转组件
    component: Create
  },
  {
    //路由跳转路径
    path: '/multiple_choose',
    //路由名称
    name: 'multiple_choose',
    //路由跳转组件
    component: multiple_choose
  },
  {
    //路由跳转路径
    path: '/single_choose',
    //路由名称
    name: 'single_choose',
    //路由跳转组件
    component: single_choose
  },
  {
    //路由跳转路径
    path: '/judgement',
    //路由名称
    name: 'judgement',
    //路由跳转组件
    component: judgement
  },
  {
    //路由跳转路径
    path: '/Q_A_person',
    //路由名称
    name: 'Q_A_person',
    //路由跳转组件
    component: Q_A_person
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
