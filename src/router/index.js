import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Content from '../components/Content'
import Create from '../components/Create'
import single_choose from '../components/single_choose'
import question_bank from '../components/question_bank'
import multiple_choose from '../components/multiple_choose'

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
    path: '/Content',
    //路由名称
    name: 'Content',
    //路由跳转组件
    component: Content
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
