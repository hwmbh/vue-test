<template>
    <div v-loading.fullscreen.lock="fullscreenLoading">
    </div>
</template>

<script>
  import axios from 'axios'
  import { dingLogin } from '../../api/manage'

  export default {
    name: 'DDLogin',
    data () {
      return {
        fullscreenLoading: true
      }
    },
    created () {
      this.ddLogin()
    },
    methods: {
      async ddLogin () {
        let { data } = await dingLogin(this.$route.query.code, this.$route.query.state)
        if (data.code === 200) {
          this.$router.push({
            path: '/'
          })
          this.$Cookies.set('token', data.data.token, { expires: 1 })
          this.$Cookies.set('userName', data.data.userName, { expires: 1 })
          this.$Cookies.set('empId', data.data.empId, { expires: 1 })
          // 菜单权限
          this.$Cookies.set('perms', data.data.perms, { expires: 1 })
          // this.$store.commit('setPerms', data.data.perms)
          axios.defaults.headers.common['token'] = this.$Cookies.get('token')
        } else {
          this.$notify.error({
            message: data.msg
          })
          this.$router.push({ path: '/login' })
        }
      }
    }
  }
</script>

<style scoped>

</style>
