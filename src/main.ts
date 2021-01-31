import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.less'

import installElementPlus from './plugins/element'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).mount('#app')
