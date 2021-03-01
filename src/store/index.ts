import { createLogger, createStore } from 'vuex'
import { state } from './state'

const debug: boolean = import.meta.env.MODE === 'development'
const plugins = debug ? [createLogger({ collapsed: true })] : []
export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {},
  strict: debug,
  plugins: plugins,
})
