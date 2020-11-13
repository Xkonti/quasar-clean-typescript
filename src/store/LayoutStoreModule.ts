import { storeInstance } from './index'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  dynamic: true,
  store: storeInstance,
  namespaced: true,
  name: 'LayoutStoreModule'
})
class LayoutStoreModule extends VuexModule {
  isLeftDrawerOpen = false

  @Mutation
  SET_LEFT_DRAWER (setOpen: boolean) {
    this.isLeftDrawerOpen = setOpen
  }

  @Action
  setLeftDrawer (setOpen: boolean) {
    this.SET_LEFT_DRAWER(setOpen)
  }
}

export const LayoutStore = getModule(LayoutStoreModule)
