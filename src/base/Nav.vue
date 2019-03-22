<template>
  <el-menu @select="menuAction" :default-active="navActive" :default-openeds="navOpeneds">
    <el-submenu v-for="(category, index1) in list" :key="index1" :index="'' + index1">
      <template slot="title">
        <i class="icon" :class="'ion-md-' + category.icon"></i>
        <span>{{category.name}}</span>
      </template>
      <router-link v-for="(item, index2) in category.children" :key="index2" :to="item.url">
        <el-menu-item :index="index1 + '-' + index2">{{item.name}}</el-menu-item>
      </router-link>
    </el-submenu>
  </el-menu>
</template>

<script>
  import { loadNav } from '../api/manage'
  import { redirectLogin } from '../api/base'
  export default {
    name: 'MNav',
    data () {
      return {
        list: []
      }
    },
    computed: {
      navActive: function () {
        //return this.$store.state.dashboard.navActive
      },
      navOpeneds: function () {
        //return this.$store.state.dashboard.navOpeneds
      }
    },
    created () {
     // this.loadNav()
      // console.log(this.$route)
      // console.log(this.$router)
    },
    mounted () {
      setTimeout(() => {
        this.loadNavStatus()
      }, 1000)
    },
    methods: {
      /**
       * 加载左侧菜单
       * @returns {Promise<void>}
       */
      async loadNav () {
        // let { data } = await loadNav()
        // if (data.code === 200) {
        //   this.list = data.data
        // } else if (data.code === 401 || data.code === -100) {
        //   redirectLogin(this, data.msg)
        // } else {
        //   this.$notify.error({
        //     message: data.msg
        //   })
        // }
      },
      /**
       * 保存菜单展开和激活状态
       * @param index
       * @param indexPath
       */
      menuAction (index, indexPath) {
        sessionStorage.setItem('navActive', index)
        sessionStorage.setItem('navOpeneds', indexPath)
      },
      /**
       * 加载sessionStorage中保存的菜单展开数据
       */
      loadNavStatus () {
        // this.$store.commit('changeNavStatus', {
        //   navActive: sessionStorage.getItem('navActive'),
        //   navOpeneds: sessionStorage.getItem('navOpeneds').split(',')
        // })
      }
    }
  }
</script>

<style scoped>
  .el-submenu, .el-menu-item {
    text-align: left;
  }
  .el-submenu__title .icon {
    margin-right: 10px;
    font-size: 1.5em;
  }
</style>
