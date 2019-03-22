<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>公司管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row justify="end">
            <el-col class="tar" :span="24">
                <el-form :model="search" ref="search" :rules="searchRules" :inline="true"
                        @keyup.enter.native="submitForm('search')">
                    <el-form-item>
                        <el-input v-model="search.companyname" placeholder="公司名称" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="search.companynumber" placeholder="公司编号" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="search.domain" placeholder="域名" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="search.state" placeholder="状态">
                        <el-option
                            v-for="(item, index) in searchOptions.state"
                            :key="index"
                            :label="item.name"
                            :value="item.code">
                        </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button icon="el-icon-search" type="primary" @click="submitForm('search')">查询</el-button>
                        <el-button icon="el-icon-plus" type="primary" @click="formVisible = true">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table
                    ref="listTable"
                    v-loading="loading"
                    :data="listData.list"
                    stripe
                    border>
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        prop="serial"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="companynumber"
                        label="公司编码">
                    </el-table-column>
                    <el-table-column
                        prop="companyname"
                        label="公司名称">
                    </el-table-column>
                    <el-table-column
                        prop="sorting"
                        label="排序">
                    </el-table-column>
                    <!-- <el-table-column
                        prop="state"
                        label="状态">
                    </el-table-column> -->
                    <el-table-column
                      prop="state"
                      label="状态"
                      v-model="value2"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-table-column>
                    <el-table-column
                        prop="record"
                        label="备案信息">
                    </el-table-column>
                    <el-table-column
                        prop="domain"
                        label="域名">
                    </el-table-column>
                    <el-table-column
                        prop="describe"
                        label="描述">
                    </el-table-column>
                    <el-table-column
                        prop="operationpeople"
                        label="操作人">
                    </el-table-column>
                    <el-table-column
                        prop="operationtime"
                        label="操作时间">
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width="150">
                      <template slot-scope="scope">
                        <el-button  type="primary" size="mini" @click="editData(scope.row)">修改</el-button>
                        <el-popover
                          width="160"
                          placement="top"
                          v-model="scope.row.confirm_visible">
                          <p>删除这条记录吗？</p>
                          <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="scope.row.confirm_visible = false">取消</el-button>
                            <el-button type="primary" size="mini" @click="deleteData(scope.row.id, scope.$index)">
                              确定
                            </el-button>
                          </div>
                          <el-button type="danger" size="mini" slot="reference">删除</el-button>
                        </el-popover>
                      </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="tar" :span="24">
                <el-pagination
                :current-page="listData.currPage"
                :page-sizes="[15, 30, 50, 100]"
                :page-size="listData.pageSize"
                :total="listData.totalCount"
                @size-change="pageSizeChange"
                @current-change="pageControl"
                layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </el-col>
        </el-row>

        <el-dialog
          title="新增"
          :visible.sync="formVisible"
          width="700px"
          :before-close="handleClose">
          <el-form :model="form" ref="form" :label-width="formLabelWidth">
            <el-form-item label="序号" prop="serial">
              <el-input v-model="form.serial" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公司编码" prop="companynumber">
              <el-input v-model="form.companynumber" :maxlength="11" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="sorting">
              <el-input v-model="form.sorting" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
              <el-input v-model="form.state" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备案信息" prop="record">
              <el-input v-model="form.record" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="域名" prop="domain">
              <el-input v-model="form.domain" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="describe">
              <el-input v-model="form.describe" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="操作人" prop="operationpeople">
              <el-input v-model="form.operationpeople" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="操作时间" prop="operationtime">
              <el-input v-model="form.operationtime" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="formVisible = false">取 消</el-button>
            <el-button type="primary" @change="changeOverlay" @click="modify">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
  import { redirectLogin } from '../../api/base'
  import { administrator } from '../../api/vuetest'

  export default {
    name: 'administrator',
    data () {
      
      return {
        formVisible: false,
        value1: true,
        value2: true,
        search: {
          companyname: '',
          companynumber: '',
          domain: '',
          state: ''
        },
        searchRules: {},
        loading: false,
        // 查询类别对象
        searchOptions: {
          // 状态
          state: []
        },
        listData: {
          totalCount: 0,
          pageSize: 15,
          totalPage: 0,
          currPage: 0,
          list: []
        },
        listDataChecks: [],
        formLabelWidth: '100px',
        formVisible: false,
        form: {
          purpose: 'create',
          serial: '',
          companynumber: '',
          sorting: '',
          state: '',
          record: '',
          domain: '',
          describe: '',
          operationpeople: '',
          operationtime: ''
        },
        selected : -1, // 选择了哪条记录
        selectedlist : {} // 选中的信息
      }
    },
    created () {
      this.administrator()
    },
    mounted () {
      this.submitForm('search')
    },
    methods: {
      // 新增弹窗关闭
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      /**
       * 获取搜索条件
       */
      getSearchText () {
        let app = this
        let searchText = {}
        app.search.companyname && (searchText.companyname = app.search.companyname)
        app.search.companynumber && (searchText.companynumber = app.search.companynumber)
        app.search.domain && (searchText.domain = app.search.domain)
        searchText.state = app.search.state
        return searchText
      },
      /**
       * 获取状态
       */
      async administrator () {
        let { data } = await administrator()
        if (data.code === 200) {
          this.$set(this.searchOptions, 'state',
            [{
              name: '全部',
              code: ''
            }].concat(data.data)
          )
        } else if (data.code === 401 || data.code === -100) {
          redirectLogin(this, data.msg)
        } else {
          this.$notify.error({
            message: data.msg
          })
        }
      },
      //查询
      submitForm (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            this.pageControl(1)
          }
        })
      },
      //页码
      pageSizeChange (limit) {
        this.listData.pageSize = limit
        this.pageControl(1)
      },
      /**
       * 统计分页读取
       * @param index 页码
       */
      async pageControl (index) {
        let app = this
        let searchText = {
          page: index,
          limit: app.listData.pageSize
        }
        searchText = Object.assign(searchText, app.getSearchText())
        this.loading = true
        let { data } = await administrator(searchText)
        this.listData.list = data
        if (data.code === 200) {
          this.listData = data.data
        } else if (data.code === 401 || data.code === -100) {
          redirectLogin(this, data.msg)
        } else {
          this.$notify.error({
            message: data.msg
          })
        }
        this.loading = false
      },
      //修改公司管理数据
      editData (data) {
        this.formVisible = true
        this.form = data
        this.$set(this.form, 'purpose', 'patch')
      },
      //新增公司管理数据
      deleteData(index) {
        this.listData.list.splice(index, 1)
      },
      changeOverlay() {
        this.isActive = !this.isActive;
      },
      //新增公司管理数据保存
      modify(arr) {
        if (this.selected > -1) {
            Vue.set(this.listData.list, this.selected, arr);
            this.selected = -1;
        } else {
            this.listData.list.push(arr);
        }
        this.setSlist(this.listData.list);
        this.changeOverlay();
      },
      // 获取需要渲染到页面中的数据
      setSlist(arr) {
        this.slist = JSON.parse(JSON.stringify(arr));
      }
    }
  }
</script>
