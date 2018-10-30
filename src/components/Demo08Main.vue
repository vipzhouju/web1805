<template>
  <h2>这是主页面！{{userName}}</h2>
</template>

<script>
 export default{
    mounted(){
      this.userName=this.$route.params.myName
     },
    data(){
        return{
            userName:""
        }
    }  
  }

</script>