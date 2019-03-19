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
                        <el-input v-model="search.orderNo" placeholder="公司名称" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="search.projectNo" placeholder="公司编号" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="search.projectNo" placeholder="域名" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button icon="el-icon-search" type="primary" @click="submitForm('search')">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
