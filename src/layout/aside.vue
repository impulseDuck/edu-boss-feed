<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="/role">
             <i class="el-icon-user"></i>
            <span>角色列表</span>
          </el-menu-item>
          <el-menu-item index="/menu">
            <i class="el-icon-user"></i>
            <span>菜单列表</span>
          </el-menu-item>
          <el-menu-item index="/resource">
            <i class="el-icon-user"></i>
            <span>资源列表</span>
          </el-menu-item>
      </el-submenu>
      <el-menu-item index="/course">
        <i class="el-icon-menu"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>广告管理</span>
        </template>
          <el-menu-item index="/advert">
            <i class="el-icon-s-platform"></i>
            <span>广告列表</span>
          </el-menu-item>
          <el-menu-item index="/advert-space">
            <i class="el-icon-s-platform"></i>
            <span>广告列表位</span>
          </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'aside',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key:string, keyPath:string):void {
      console.log(key, keyPath)
    },
    handleClose (key:string, keyPath:string):void {
      console.log(key, keyPath)
    }
  }
})
</script>
<style lang="scss" scoped>
.el-menu{
  min-height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
