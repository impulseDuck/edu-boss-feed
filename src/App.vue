<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script >
import request from './utils/request.ts'
// import Vue from 'vue'
request({
  method: 'GET',
  url: '/boss/v2/api-docs?group=edu-boss-boot'
}).then(res => {
  console.log(res)
})
export default ({
  name: 'App'
})
</script>
<style lang="scss" scoped>
.text {
  color: $info-color;
}
</style>
