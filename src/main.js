// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'jquery/dist/jquery.min.js'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'
import store from './store'
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client'
import CxltToastr from 'cxlt-vue2-toastr'

Vue.use(CxltToastr)
Vue.use(VueSocketio, io('http://localhost:3000'));
Vue.use(VueSocketio, io('http://localhost:3000'), store);
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.use(VueResource);

// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

