// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  Demo02  from '@/components/Demo02'
import  Demo05  from '@/components/Demo05Lianxi'
import Vuex from 'vuex'
import myStore from './store/basic'

Vue.config.productionTip = false


Vue.component("demo05",Demo05)
Vue.component("demo02",Demo02)

/*router.beforeEach((to,from,next)=>{
    console.log(to)
    console.log(from)
    console.log(next)
    next()
})*/

Vue.prototype.myBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:myStore,
  components: { App },
  template: '<App/>'
})
