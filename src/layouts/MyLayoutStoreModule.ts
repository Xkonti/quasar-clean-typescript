import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../store/index';

@Module({
  dynamic: true,
  name: 'log',
  namespaced: true,
  store: Store
})
export default class MyLayoutStoreModule extends VuexModule {
  public leftDrawerOpen = false;

  @Mutation
  public SET_LEFT_DRAWER_OPEN(value: boolean) {
    this.leftDrawerOpen = value;
  }

  @Action
  public setLeftDrawerOpen(value: boolean) {
    this.SET_LEFT_DRAWER_OPEN(value);
  }

  @Action
  public toggleLeftDrawer() {
    this.SET_LEFT_DRAWER_OPEN(!this.leftDrawerOpen);
  }
}
