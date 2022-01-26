import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '../views/LoginRegister.vue'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Auction from '../views/Auction.vue'
import FinishPayment from '../views/FinishPayment.vue'
import History from '../views/History.vue'
import Favorite from '../views/Favorite.vue'
import FavorDetail from '../views/FavorDetail.vue'

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
  },
  {
    path: '/auction',
    name: 'Auction',
    component: Auction
  },
  {
    path: '/payment',
    name: 'Payment',
    component: FinishPayment
  },
  {
    path: '/orderhistory',
    name: 'History',
    component: History
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/favoritedetail/:id',
    name: 'FavoriteDetail',
    component: FavorDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'Login' && localStorage.access_token) {
    next('/')
  } else {
    next()
  }
})


export default router
