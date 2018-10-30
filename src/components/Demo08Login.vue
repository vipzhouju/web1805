<template>
  <div>
    <input type="text" v-model="uname"/>
    <button @click="handleClick">登录</button>
  </div>
</template>

<script>
  export default{
     data(){
         return{
             uname:""
         }
     },
     methods:{
         handleClick(){
             this.$router.push("/main/"+this.uname)

         }
     }
  }

</script>