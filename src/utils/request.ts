import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
const request = axios.create({
  // 配置选项
  // baseUrl
  // timeout
})

// 请求响应,设置响应头
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  request.interceptors.response.use(function (response) {
    // 如果是自定义错误状态码，
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 如果是HTTP错误状态码
    // 对响应错误做点什么
    if (error.response) { // 请求发出去，收到响应，但是状态码超出了2范围
      const { status } = error.response
      if (status === 400) {
        Message.error('请求参数错误')
      } else if (status === 401) {
        Message.error('token无效')
      } else if (status === 403) {
        Message.error('没有权限，请联系管理员')
      } else if (status === 404) {
        Message.error('请求资源不存在')
      } else if (status >= 500) {
        Message.error('服务端错误，请联系管理员')
      }
    } else if (error.request) { // 请求发出去没有收到响应
      Message.error('请求超时，请刷新重试')
    } else { // 设置请求时候发生了一些事情，触发了一个错误
      Message.error(`请求失败：${error.message}`)
    }
    return Promise.reject(error)
  })
  return Promise.reject(error)
})

// 响应拦截

export default request
