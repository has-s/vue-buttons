import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'
import BlogPage from "@/components/pages/Bobrysheva/BlogPage.vue";
import LogPage from "@/components/pages/Bobrysheva/LogPage.vue";
import TextPage from "@/components/pages/Bobrysheva/TextPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/blog',
    name: RouteNames.BLOG,
    component: BlogPage
  },
  {
    path: '/blog/article/:id',
    name: RouteNames.ARTICLE,
    component: TextPage
  },
  {
    path: '/blog/login',
    name: RouteNames.LOGIN,
    component: LogPage
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
