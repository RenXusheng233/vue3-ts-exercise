import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.less'

createApp(App).use(router).use(store).mount('#app')
