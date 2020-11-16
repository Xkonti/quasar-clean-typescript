import { store } from 'quasar/wrappers'
import Vuex, { Store } from 'vuex'

export let storeInstance: Store<unknown>

export default store(function ({ Vue }) {
  Vue.use(Vuex)
  const store = new Store<unknown>({
    modules: {},
    strict: !!process.env.DEBUGGING
  })
  storeInstance = store
  return store
})
