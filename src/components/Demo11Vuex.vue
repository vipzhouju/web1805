<template>
  <div>
     <h1>这是一个和vuex相关的案例！</h1>
     <ul>
       <li v-for='(tmp,index) in myList'>
         <span>{{tmp}}</span>
         <button @click="deleteFromList(index)">del</button>
       </li>
     </ul>
     <button @click="handleClick">测试mutation</button>
  </div>
</template>

<script>

  export default{
   mounted(){
     console.log(this.$store.state.list)
   },
   computed:{
     myList(){
       return this.$store.state.list
     }
   },
   methods:{
     deleteFromList(index){
       this.$store.commit('delData',index)
     },
     handleClick(){
        //this.$store.commit('addData')
        this.$store.dispatch('loadData')
     }
   }
  }

</script>