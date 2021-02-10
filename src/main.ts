import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.less'
import './style/iconfont.css'
import './style/variable.css'

// Element-plus
import installElementPlus from './plugins/element'

// apexcharts
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).use(VueApexCharts).mount('#app')
