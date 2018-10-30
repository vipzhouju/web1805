<template>
  <ul>
     <li v-for="(tmp,index) in list">
       <!--<button @click="jump()">{{"商品"+tmp}}</button>-->
       <router-link :to="'/detail/'+index">{{"商品"+tmp}}</router-link>
     </li>
  </ul>
</template>

<script>
   export default{
       data(){
           return {
               list:[100,200,300]
           }
       },
       methods:{
           jump(){
            this.$router.push('/detail')
           }
       }
    }
</script>