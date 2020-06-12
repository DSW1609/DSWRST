import Vue from 'vue'
import VueRouter from 'vue-router'

const First = () => import('views/first/First')
const Home = () => import('views/home/Home')
const Gua = () => import('views/gua/Gua')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [{
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: First
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/gua',
    component: Gua
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router