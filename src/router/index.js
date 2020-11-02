import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/shell/:sessionId',
    name: 'Shell',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/ShellPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
