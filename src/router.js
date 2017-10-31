import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import layoutRoutes from './components/Layouts/routes.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {...layoutRoutes }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
