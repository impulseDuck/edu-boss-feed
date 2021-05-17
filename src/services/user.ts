/* 用户相关模块
*/
import store from '@/store'
import request from '@/utils/request.ts'
import qs from 'qs'

interface User {
  phone: string
  password: string
}
// 如果data为普通对象，则'content-type': 'application/json，需要手动设置请求头格式。
// 如果data为data: qs.stringify(data)，转换后的格式，默认会切换为'content-type': 'application/x-www-form-urlencoded'，不需要手动设置请求头
export const login = (data: User) => {
  return request({
    url: '/front/user/login',
    method: 'POST',
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
export const getUserInfo = () => {
  return request({
    url: '/front/user/getInfo',
    method: 'GET'
    // headers: { Authorization: store.state.user.access_token }
  })
}
