import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'
import BlogPage from "@/components/pages/Bobrysheva/BlogPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/BOBRBLOG',
    name: RouteNames.BOBRBLOG,
    component: BlogPage
  },
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
