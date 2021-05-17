<template>
  <div class="header">
    <!-- 左侧 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 右侧 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :src="userINfo.portrait || circleUrl"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{userINfo.userName}}</el-dropdown-item>
        <el-dropdown-item divided @click.native="handleBack">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getUserInfo } from '@/services/user.ts'
export default Vue.extend({
  name: 'layoutHeader',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      userINfo: ''
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    handleBack () {
      // 清除登录状态
      this.$store.commit('setUser', null)
      this.$confirm('确定退出吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功'
        })
        this.$router.push({
          name: 'login'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出'
        })
      })
    },
    async getUserInfo () {
      const { data } = await getUserInfo()
      this.userINfo = data.content
      console.log(this.userINfo)
    }
  }
})
</script>
<style lang="scss" scoped>
.header{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
