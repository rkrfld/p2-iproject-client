import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '../views/LoginRegister.vue'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginRegis
  },
  {
    path: '/register',
    name: 'Register',
    component: LoginRegis
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
