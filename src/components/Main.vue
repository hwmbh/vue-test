<template>
  <div>
    <el-container>
      <el-header class="header-frame" :height="headerHeight">
        <MHeader></MHeader>
      </el-header>
      <el-container class="main-frame">
        <el-aside :width="navWidth">
          <MNav></MNav>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import MHeader from '../base/Header'
  import MNav from '../base/Nav'
  import axios from 'axios'

  export default {
    name: 'Main',
    components: {
      MHeader,
      MNav
    },
    data () {
      return {
        headerHeight: '72px',
        navWidth: '200px'
      }
    },
    beforeCreate () {
     // axios.defaults.headers.common['token'] = this.$Cookies.get('token')
    }
  }
</script>

<style scoped>
  .el-main{
    margin-top:72px;
    margin-left:200px;
  }
</style>
