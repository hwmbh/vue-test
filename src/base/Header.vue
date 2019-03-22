<template>
  <div>
    <div class="header-logo">
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6IzJEOENFRjt9DQoJLnN0MntmaWxsOiMyREY1QkU7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MywwSDExQzQuOSwwLDAsNC45LDAsMTF2NTNoNTNjNi4xLDAsMTEtNC45LDExLTExVjExQzY0LDQuOSw1OS4xLDAsNTMsMHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNC40LDE1LjFjLTEsMC0xLjksMC44LTEuOSwxLjl2NC41YzAsMSwwLjgsMS45LDEuOSwxLjloNC4zdjI4LjRoOC4yYzAsMCwwLDAsMCwwVjIzLjNoMTIuMw0KCWMxLDAsMS45LTAuOCwxLjktMS45di02LjRIMjQuNHoiLz4NCjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOC4xLDIzLjNoLTQuNWMtMSwwLTEuOS0wLjgtMS45LTEuOXYtNi4zaDYuM2MxLDAsMS45LDAuOCwxLjksMS45djQuNUMyMCwyMi41LDE5LjEsMjMuMywxOC4xLDIzLjN6Ii8+DQo8L3N2Zz4NCg==">
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNCA2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxLjIgKDM1Mzk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bGluZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+DQogICAgICAgIDxnIGlkPSLlupTnlKjmpoLop4giIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAwMDAwLCAtNDAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIsMCBMMiwyMCIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDQ0IEwyLDY0IiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="
        class="header-logo-line">
      <div class="header-logo-title">
        <h3>学分后台管理系统</h3>
        <h4>Tuandai Saving Manager</h4>
      </div>
    </div>
    <div class="header-aside">
      <el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-setting"></i>
    用户：{{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link tag="div" to="/manage/modify">修改密码</router-link></el-dropdown-item>
          <el-dropdown-item divided><div @click="logout">退出</div></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { logout } from '../api/manage'
  export default {
    name: 'MHeader',
    data () {
      return {
        userName: ''
      }
    },
    mounted () {
      //this.userName = this.$Cookies.get('userName')
    },
    methods: {
      async logout () {
        let { data } = await logout().catch((error) => {
          this.$notify.error({
            message: error
          })
        })
        if (data.code === 200) {
          this.$Cookies.remove('token')
          this.$router.push({ path: '/login' })
          this.$notify({
            message: data.msg,
            type: 'success'
          })
        } else {
          this.$notify.error({
            message: data.msg
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-logo{
    display:inline-block;
    float:left;
    position:relative;
    text-align:left;

    img{
      width:32px;
      height:32px;
      position:relative;
      top:20px;
      margin-left:30px;
      float:left;

      &.header-logo-line{ margin-left:15px; }
    }

    h3, h4{
      display:inline-block;
      margin:0;
      padding:0;
      color:#FFF;
    }
    h3{ font-size:14px;}
    h4{ font-size:12px;}
  }

  .header-logo-title{
    margin-left:82px;
    position:relative;
    top:16px;
  }

  .header-items{
    position:absolute;
    left:220px;
    top:0;
  }

  .header-aside{
    float:right;
    margin:0 30px 0 0;
    position:relative;
    color:#FFF;
    padding-top:25px;
    font-size:16px;
  }
  .el-dropdown{
    color:#FFF;
  }
  .el-dropdown-link{
    cursor:pointer;
  }
  .el-dropdown-menu--small .el-dropdown-menu__item{
    padding:5px 15px;
  }
</style>
