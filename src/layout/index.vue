<template>
  <el-container>
  <el-aside width="200px">
    <Aside></Aside>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Aside from './aside.vue'
export default Vue.extend({
  name: 'LayoutIndex',
  components: {
    Aside
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
  background-color: #b6bfcf;
}
.el-main{
  background-color: #eaeef2;
}
</style>
