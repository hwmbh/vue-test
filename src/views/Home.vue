<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <header msg="head"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Head from '@/components/Head.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Head
  }
}
</script>
