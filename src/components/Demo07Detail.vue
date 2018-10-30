<template>
  <div>
     <h2>
        这是一个详情页！
     </h2>
     <button @click="back()">返回上一页</button>
  </div>
</template>

<script>
   export default{
        mounted(){
          console.log(this.$route.params)
        },
        methods:{
             back(){
                console.log(this.$router)
            }
        }
    }
</script>