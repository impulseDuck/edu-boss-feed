<template>
  <el-container>
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Aside from './aside.vue'
import Header from './header.vue'
export default Vue.extend({
  name: 'LayoutIndex',
  components: {
    Aside,
    Header
  }
})
</script>
<style lang="scss" scoped>
.el-container{
  min-height: 100vh;
  min-width: 980px;
}
.el-aside{
  background-color: #d5dce5;
}
.el-header{
  background-color: #fff;
}
.el-main{
  background-color: #eaeef2;
}
</style>
