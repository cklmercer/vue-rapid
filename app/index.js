import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import app from 'components/app'
import store from 'store'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  el: '#app',
  render: r => r(app),
  router: new VueRouter(router),
  store: new Vuex.Store(store)
})
