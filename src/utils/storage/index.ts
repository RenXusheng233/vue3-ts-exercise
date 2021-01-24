/**
 * 封装对外接口
 */
import { localStorageAPI } from './localstorage'
import { SessionstorageAPI } from './sessionstorage'

interface UseStoreType {
  set: Function;
  get: Function;
  remove: Function;
  getExpire?: Function;
  setExpire?: Function;
}

export default (store?: string): UseStoreType => {
  let UseStore
  switch (store) {
    case 'localstorage':
      UseStore = localStorageAPI
      break;

    default:
      UseStore = SessionstorageAPI
      break;
  }
  return new UseStore()
}