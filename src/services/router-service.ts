import type { Router } from 'vue-router'

class RouterService {
  private routerInstance: Router | null = null

  public get router () {
    if (this.routerInstance == null) {
      const message = 'Tried to access the router before it was assigned to the router service.'
      console.error(message)
      throw new Error(message)
    } else {
      return this.routerInstance
    }
  }

  public assignRouter (instance: Router) {
    this.routerInstance = instance
  }
}

export const routerService = new RouterService()
