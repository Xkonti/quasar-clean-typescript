import { v4 as Uuid } from 'uuid'
import { routerService } from 'src/services/router-service'
import { RouteRecordRaw } from 'vue-router'

export class RouteTarget {
  id: string = Uuid()
  path = ''

  assign (route: string): string {
    this.path = route
    return this.id
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public go () {
    return routerService.go(this)
  }
}

function concatRoutePath (path: string | null, extension: string): string {
  if (path == null || path.length === 0) {
    return extension
  }
  if (path.endsWith('/')) {
    return path + extension
  }
  return path + '/' + extension
}

export function processRoutes (routesTree: RouteRecordRaw[], routeTargets: RouteTarget[], prefix: string | null = null) {
  for (const route of routesTree) {
    // Update route path and route target path
    const matchingTarget = routeTargets.find(target => target.id === route.path)
    if (matchingTarget) {
      route.path = matchingTarget.path
      matchingTarget.path = concatRoutePath(prefix, matchingTarget.path)
    }

    // Recursively process children
    if (route.children) {
      processRoutes(route.children, routeTargets, concatRoutePath(prefix, route.path))
    }
  }
}
