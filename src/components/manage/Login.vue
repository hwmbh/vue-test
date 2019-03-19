<template>
  <div class="login" @keydown.enter="login('form')">
    <div class="login-con">
      <el-tabs type="border-card">
        <el-tab-pane label="钉钉登录">
          <div id="login_container"></div>
        </el-tab-pane>
        <el-tab-pane label="账户登录">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>欢迎登录</span>
            </div>
            <div class="form-con">
              <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名/手机" prop="username">
                  <el-input type="text" v-model="form.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" :loading="loading" @click="login('form')">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { login } from '../../api/manage'
  import axios from 'axios'
  import { DDLogin } from '../../api/base'

  export default {
    name: 'Login',
    data () {
      return {
        loading: false,
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
      this.renderDD()
    },
    methods: {
      login (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            this.loading = true
            let { data } = await login(this.form).catch((error) => {
              this.$notify.error({
                message: error
              })
              this.loading = false
            })
            this.loading = false
            if (data.code === 200) {
              this.$notify({
                message: data.msg,
                type: 'success'
              })
              this.$router.push({ path: '/' })
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
            }
          }
        })
      },
      renderDD () {
        let redictUrl = encodeURIComponent('http://cgtadmin.tuandai888.com/#/ddlogin')
        let goto = encodeURIComponent('https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoacga6rh3ptswx1bso&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=' + redictUrl)
        DDLogin({
          id: 'login_container',
          goto: goto, // 请参考注释里的方式
          style: 'border:none;background-color:#FFFFFF;',
          width: '365',
          height: '320'
        })

        let hanndleMessage = function (event) {
          let origin = event.origin
          console.log('origin', event.origin)
          if (origin === 'https://login.dingtalk.com') { // 判断是否来自ddLogin扫码事件。
            let loginTmpCode = event.data // 拿到loginTmpCode后就可以在这里构造跳转链接进行跳转了
            console.log('loginTmpCode', loginTmpCode)
            window.location = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoacga6rh3ptswx1bso&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redictUrl}&loginTmpCode=${loginTmpCode}`
          }
        }

        if (typeof window.addEventListener !== 'undefined') {
          window.addEventListener('message', hanndleMessage, false)
        } else if (typeof window.attachEvent !== 'undefined') {
          window.attachEvent('onmessage', hanndleMessage)
        }
      }
    }
  }
</script>

<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    &-con {
      position: absolute;
      right: 160px;
      top: 50%;
      transform: translateY(-60%);
      width: 400px;
      &-header {
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        padding: 30px 0;
      }
      .form-con {
        padding: 10px 0 0;
      }
      .login-tip {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }

    .box-card{
      padding-right:30px;
    }
    .el-button{
      display:block;
      width:100%;
    }
  }
</style>
