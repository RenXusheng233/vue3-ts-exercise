/**
 * 封装对外接口
 */

interface UseStoreType {
  set: Function
  get: Function
  remove: Function
  getExpire?: Function
  setExpire?: Function
}

export default (store?: string): UseStoreType => {
  let UseStore
  switch (store) {
    case 'localstorage':
      UseStore = require('./localstorage').localStorageAPI
      break

    case 'sessionstorage':
      UseStore = require('./sessionstorage').SessionstorageAPI
      break

    default:
      UseStore = require('./localstorage').localStorageAPI
      break
  }
  return new UseStore()
}
