import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import SignUp from '../components/SignUp'


const routes = [
  {
    path: '/',
    redirect: '/home',
    component: App
  },
  {
    path: '/home',
    name: 'Home',
    component: App
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
 /*  {
    path: '/login',
    name: 'Login',
    component: Login
  } */
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
   
/* const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}) */

export default router  