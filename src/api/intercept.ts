/**
 * 创建实例, 添加拦截
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import storage from '../utils/storage'
import { get } from 'lodash'

import { useRouter } from 'vue-router'
const router = useRouter()

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: any) => {
  const status = get(error, 'response.status')
  switch (status) {
    case 400:
      error.message = '请求错误'
      break
    case 401:
      error.message = '未授权，请登录'
      router.push('/login')
      storage().remove('ACCESS_TOKEN')
      break
    case 403:
      error.message = '拒绝访问'
      break
    case 404:
      error.message = `请求地址出错: ${error.response.config.url}`
      break
    case 408:
      error.message = '请求超时'
      break
    case 500:
      error.message = '服务器内部错误'
      break
    case 501:
      error.message = '服务未实现'
      break
    case 502:
      error.message = '网关错误'
      break
    case 503:
      error.message = '服务不可用'
      break
    case 504:
      error.message = '网关超时'
      break
    case 505:
      error.message = 'HTTP版本不受支持'
      break
    default:
      break
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config: AxiosRequestConfig) => {
  // 如果 token 存在
  // 让每个请求携带自定义 token
  config.headers.Authorization = storage().get('ACCESS_TOKEN')
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response: AxiosResponse) => {
  // 若返回的请求头中包含 authorization, 则存入到缓存中
  if (response.headers.authorization) {
    storage().set('ACCESS_TOKEN', response.headers.authorization)
  }

  const dataAxios = response.data
  // 获取返回的状态码
  const { code } = dataAxios
  // 根据 code 进行判断
  if (code === undefined) {
    // 如果没有 code 代表这不是项目后端开发的接口
    return dataAxios
  } else {
    // 有 code 代表这是一个后端接口 可以进行进一步的判断
    switch (code) {
      // 正确返回
      case 0:
        return dataAxios.data
      default:
        // 不是正确的 code
        return dataAxios.message
    }
  }
}, errorHandler)

export default request
