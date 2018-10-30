<template>
  <div>
    <h2>{{count}}</h2>

    <button @click="handleClick">clickMe</button>

    <a  :href="url">测试页面</a>

    <input type='checkbox' v-model="isAgree"/>
    <button :disabled="!isAgree">注册</button>

    <h2 v-if="isAgree">欢迎注册</h2>
    
    <div>{{myHtml}}</div>
    <div v-html="myHtml"></div>

    <h2>{{"hello" | myFilter(1,2)}}</h2>

    <h3>{{getIsOdd()}}</h3>
    <h3>{{handleData}}</h3>
  </div>
</template>

<script>
   export default{
       data(){
           return {
               myHtml:"<h1>hello directive</h1>",
               isOdd:true,
               isAgree:false,
               count:1,
               url:"http://jsonplaceholder.typicode.com"
           }
       },
       methods:{
           handleClick(){
               this.count++
               if(this.count%2 == 0){
                   this.isOdd = true
               }else{
                   this.isOdd = false
               }
           },
           getIsOdd(){
               console.log("方法被调用了！")
               return this.isOdd
           }
       },
       filters:{
           myFilter(msg,arg1,arg2){
              // return  "过滤后的结果："+msg
              console.log("接收到的参数是",arg1,arg2)
           }
       },
       computed:{
           handleData(){
               console.log("计算属性被调用了！")
               return this.isOdd
           }
       },
       watch:{
           "isAgree":function(newValue,oldValue){
               console.log(newValue,oldValue)
           }
       }
   }
</script>