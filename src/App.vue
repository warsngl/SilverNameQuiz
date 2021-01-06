<template lang='pug'>
#app
  #nav 
    router-link.link(
      v-for='link in linkMenu'
      :to='link.url'
    ) {{ link.name}}
  router-view
</template>

<script>
export default {
  props:{
    
  },
  data:()=>({
    linkMenu:[
      {'name':'Home','url':'/'},
      {'name':'Buy','url':'/buy'},
      {'name':'Info','url':'/info'},
      {'name':'About','url':'/about'}
    ]
  })
}
</script>
<style lang='stylus'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.link
  margin-right 20px
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
