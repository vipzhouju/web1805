import Vue from 'vue'
import Vuex from 'vuex'
import cartModule from './modules/cart'

Vue.use(Vuex)

var myStore = new Vuex.Store({
    state:{
        list:[100,200,300]
    },
    mutations:{
        addData:(state)=>{
            state.list.push(Math.random()*10)
        },
        delData:(state,index)=>{
        state.list.splice(index,1)
    }
    },
    actions:{
        loadData(context){
           setTimeout(()=>{
               var tmp = 200
               context.commit("addData")
           },2000)
        }
    },
    modules:{
        cart:cartModule
    }
   
})

export default myStore