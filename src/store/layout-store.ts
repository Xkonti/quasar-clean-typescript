import { defineStore } from 'pinia'

interface LayoutStoreState {
  isLeftDrawerOpen: boolean,
}

export const useLayoutStore = defineStore({
  id: 'layoutStore',
  state: (): LayoutStoreState => ({
    isLeftDrawerOpen: true,
  }),

  getters: {},

  actions: {
    setLeftDrawer (newValue: boolean) {
      this.isLeftDrawerOpen = newValue
    },

    toggleLeftDrawer () {
      this.isLeftDrawerOpen = !this.isLeftDrawerOpen
    },
  },
})
