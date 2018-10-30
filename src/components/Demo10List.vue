<template>
  <div>
    <ul>
      <li>text01</li>
      <li>text02</li>
      <li>text03</li>
      <li>text04</li>
    </ul>
  </div>
</template>

<script>

  export default{
    mounted(){
        this.myBus.$on('myEvent',(result)=>{
            console.log("列表组件接收到的数据是"+result)
        })
    }
  }

</script>