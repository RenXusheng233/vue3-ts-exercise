import { createLogger, createStore } from 'vuex'
import { state } from './state'

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {},
  strict: true,
  plugins: [createLogger()],
})
