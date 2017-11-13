import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login'
import register from '@/register'
import chat from '@/components/chat'
import 'jquery/dist/jquery.min.js'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
import VueResource from 'vue-resource'
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client'
<<<<<<< HEAD
Vue.use(VueSocketio, io('http://localhost:3002'));
=======
Vue.use(VueSocketio, io('http://localhost:3000'));
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d


Vue.use(VueResource);

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
export default router