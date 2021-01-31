import ElementPlus from 'element-plus'
// import '../element-variables.scss' // FIXME: 导入此文件报错
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { App } from 'vue'

export default (app: App) => {
  app.use(ElementPlus, { locale })
}
