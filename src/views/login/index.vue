<template>
  <div class="login">
    <h1>EDU 登录系统</h1>
    <el-form class="form" :rules="rules" :model="ruleForm" ref="ruleForm">
      <h2>登录</h2>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit" v-loading="isLoginLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { login } from '@/services/user'
export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      ruleForm: {
        phone: '18201288771',
        password: '111111'
      },
      isLoginLoading: false,
      rules: {
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在6-18位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 表单验证
        await (this.$refs.ruleForm as Form).validate()
        // 验证通过提交表单
        this.isLoginLoading = true
        // console.log('submit')
        // 表单验证
        // 验证成功通过
        // 验证失败提示
        const { data } = await login(this.ruleForm)
        if (data.state !== 1) {
          this.$message({
            showClose: true,
            type: 'error',
            message: data.message
          })
        } else {
          this.$message({
            showClose: true,
            type: 'success',
            message: '登录成功'
          })
          // 记录登录状态，状态能全局访问，放到vuex容器中
          this.$store.commit('setUser', data.content)
          // 成功跳转到首页
          this.$router.push(this.$route.query.redirect as string || '/')
        }
        console.log(data)
        this.isLoginLoading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.form{
  width: 300px;
  height: 300px;
  background-color: #fff;
  padding: 30px;
  margin: 0 auto;
  // border: 1px solid #ccc;
}
.login {
  height: 100vh;
  text-align: center;
  padding-top: 50px;
}
</style>
