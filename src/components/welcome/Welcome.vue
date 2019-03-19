<template>
    <div><h1>欢迎来到存管后台</h1> 现在的版本是： v{{ pkg.version }} {{pkg.branch}}</div>
</template>

<script>
  const pkg = require('../../../package')
  export default {
    name: 'Welcome',
    data () {
      return {
        pkg
      }
    }
  }
</script>

<style scoped>

</style>
