<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import axios from 'axios'
// export default {
//   mounted () {
//     axios.get('/inviteActivity/skiing201811/queryGameIndex').then(res => {
//       console.log(res)
//     })
//   }
// }
</script>
<style lang="scss">
//body{margin:0px;}
html, body, #app{
    height:100%;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
