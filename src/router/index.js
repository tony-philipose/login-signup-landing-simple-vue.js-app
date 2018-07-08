import Vue from 'vue'
import Router from 'vue-router'
import signup from '@/components/signup'
import login from '@/components/login'
import main from '@/components/main'
import VueLocalStorage from 'vue-localstorage'
import VuePassword from 'vue-password'
Vue.component(VuePassword)
Vue.use(VueLocalStorage)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signup',
      component: signup
    },
    {
      path: '/l',
      name: 'login',
      component: login
    },
    {
      path: '/d',
      name: 'main',
      component: main
    }
  ]
})
