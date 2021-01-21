import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.less'

import ElementPlus from 'element-plus'
import './style/element.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
