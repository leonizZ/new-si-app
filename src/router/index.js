import Vue from 'vue'
import VueRouter from 'vue-router'

// import EventList from '@/components/EventList.vue'
// import EventShow from '@/components/EventShow.vue'
// import EventCreate from '@/components/EventCreate.vue'
import Account from '@/components/Account.vue'
import Withdraw from '@/views/Withdraw.vue'
import AddCredits from '@/views/AddCredits.vue'
import Gameplay from '@/views/Gameplay.vue'
import GameHelp from '@/views/GameHelp.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gameplay',
    component: Gameplay
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/withdraw',
    name: 'withdraw',
    component: Withdraw
  },
  {
    path: '/add-credits',
    name: 'add credits',
    component: AddCredits
  },

  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/help',
    name: 'Game Help',
    component: GameHelp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
