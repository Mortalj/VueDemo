import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from "../components/login.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {// 访问根路径/时 默认跳转到/login
      path: '/login',
      component: () => import('../components/login.vue')
    },
    {
        path:'/welcome',
        components: () => import('../components/welcome.vue')
    }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
