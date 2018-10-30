<template>
  <ul>
    <li v-for='tmp in list'>{{tmp}}</li>
  </ul>
</template>

<script>
   export default{
       data(){
           return {
               list:[1,2,3,4,5,6,7,8,9]
           }
       }
   }
</script>