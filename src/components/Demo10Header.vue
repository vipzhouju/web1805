<template>
  <div>
    <h1>这是标题！{{myTitle}}</h1>
    <button @click="operateLogin(true)">登录</button>
    <button @click="operateLogin(false)">注销</button>
    <button @click="handleClick">刷新</button>
  </div>
</template>

<script>

  export default{
     props:['myTitle'],
     methods:{
       operateLogin(isLogin){
         this.$emit("loginEvent",isLogin)
       },
       handleClick(){
         this.myBus.$emit('myEvent',123)
       }
     }
  }

</script>