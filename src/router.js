import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Portfolio from '@/components/Portfolio.vue'
import Stocks from '@/components/Stocks.vue'
import Auth from '@/components/Auth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        auth: Auth
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
  ]
})
