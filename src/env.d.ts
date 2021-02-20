// 默认配置包含了 boolean, 导致
// 封装 axios 时给 baseURL 赋值报错

interface ImportMetaEnv {
  VITE_APP_BASE_URL?: string
}
