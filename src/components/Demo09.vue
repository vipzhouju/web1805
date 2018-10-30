<template>
  <div>
    <ul>
      <li v-for="tmp in list">{{tmp}}</li>
    </ul>
    <button @click="loadMore">加载更多</button>
  </div>
</template>

<script>
import Axios from 'axios'
  export default{
    data(){
        return{
            list:[]
        }
    },
    methods:{
        loadMore(){
          var url="http://jsonplaceholder.typicode.com/users";
            
            Axios.get(url).then((result)=>{
                console.log(result)
            })
 
        }
    }
  }

</script>