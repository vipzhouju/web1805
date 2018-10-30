<template>
  <div class="hello">
    <demo05></demo05>
    <demo04></demo04>
    <demo03></demo03>
    <demo02></demo02>
    <demo01></demo01>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
  </div>
</template>

<script>
import Demo01  from "@/components/Demo01"
import Demo03 from '@/components/Demo03Lianxi'
import Demo04 from '@/components/Demo04Basic'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    "demo04":Demo04,
    "demo03":Demo03,
    "demo01":Demo01
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
