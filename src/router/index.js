import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo06List from "@/components/Demo06List"
import Demo07Detail from "@/components/Demo07Detail"
import Demo08Login from "@/components/Demo08Login"
import Demo08Main from "@/components/Demo08Main"
import Demo09 from "@/components/Demo09"
import Demo10Cart from "@/components/Demo10Cart"
import Demo11Vuex from "@/components/Demo11Vuex"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/list',component:Demo06List
    },
    {
      path:'/detail/:',component:Demo07Detail
    },
    {
      path:'/login',component:Demo08Login
    },
    {
      path:'/main/:myName',component:Demo08Main,
      beforeEnter:(to,from,next)=>{
        console.log(to)
        if(to.params.myName == 'zhangsan'){
          next()
        }
        next(false)
      }
    },
    {
      path:'/demo09',component:Demo09
    },
    {
      path:'/cart',component:Demo10Cart
    },
    {
      path:'/demo11',component:Demo11Vuex
    }
    
  ]
})
