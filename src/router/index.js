import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
//懒加载四个页面
//import Home from "../components/page/home.vue"
const Home = () => import('../components/page/home.vue')
const Category = () => import('../components/page/category.vue')
const Mine = () => import('../components/page/mine.vue')
const Shop = () => import('../components/page/shop.vue')
//组测路由
const routes = [
  {
    path:"",
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'/shop',
    component:Shop
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
