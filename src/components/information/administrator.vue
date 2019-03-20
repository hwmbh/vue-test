<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>公司管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
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
                    @selection-change="handleSelectionChange"
                    stripe
                    border>
                    <el-table-column
                        type="selection"
                        :selectable="filterSelectionDisabled"
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
                    <el-table-column
                        prop="state"
                        label="状态">
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
                        prop="operation"
                        label="操作">
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
    </div>
</template>

<script>
  import { redirectLogin } from '../../api/base'
  import { getProjectAssetType } from '../../api/evidence'

  export default {
    name: 'administrator',
    data () {
      return {
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
        listDataChecks: []
      }
    },
    created () {
      this.getProjectAssetType()
    },
    mounted () {
      this.submitForm('search')
    },
    methods: {
      /**
       * 获取搜索条件
       */
      getSearchText () {
        let app = this
        let searchText = {}

        app.search.projectNo && (searchText.projectNo = app.search.projectNo)
        app.search.userNo && (searchText.userNo = app.search.userNo)
        searchText.assetType = app.search.assetType
        searchText.repaymentWay = app.search.repaymentWay
        searchText.assureCompany = app.search.assureCompany

        return searchText
      },
      /**
       * 获取资产端类别
       */
      async getProjectAssetType () {
        let { data } = await getProjectAssetType()
        if (data.code === 200) {
          this.$set(this.searchOptions, 'assetType',
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
        let { data } = await getProjectEvidence(searchText)
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
      }
    }
  }
</script>
