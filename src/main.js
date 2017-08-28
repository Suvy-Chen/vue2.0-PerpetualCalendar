// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
// 引入mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入vuex和resource
import Vuex from 'vuex';
import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(MintUI)  // 引入mint-UI
Vue.use(Vuex);   // 引入vuex
Vue.use(VueResource)   // 引入resource


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
