<template>
  <div>
     <input type='text'  v-model="myContent"  placeholder='plase input sth'/>
     <button @click="handleClick">add</button>
     <ul>
       <li v-for="tmp in list">{{tmp}}</li>
     </ul>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                list:[],
                myContent:""
            }
        },
        methods:{
            handleClick(){
                this.list.push(this.myContent)
            } 
        }
    }
</script>