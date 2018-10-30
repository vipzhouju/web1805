<template>
  <div>
     <my-header @loginEvent="rcvLoginStatus" myTitle="购物车"></my-header>
     <my-list></my-list>
  </div>
</template>

<script>
import Demo10Header from '@/components/Demo10Header'
import Demo10List from '@/components/Demo10List'
  export default{
    components:{
        'my-header':Demo10Header,
        'my-list':Demo10List
    },
    methods:{
      rcvLoginStatus(isLogin){
         console.log("cart接收到的数据是"+isLogin)
      }
    }
  }

</script>