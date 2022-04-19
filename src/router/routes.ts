import { RouteRecordRaw } from 'vue-router'
import { processRoutes, RouteTarget } from 'vue-smart-routes'

export const routes = {
  home: new RouteTarget(),
  other: new RouteTarget(),
}

export const routingTree: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      {
        path: routes.home.assign(''),
        name: 'Home page',
        component: () => import('pages/home-page.vue'),
      },
    ],
  },
  {
    path: '/other',
    component: () => import('layouts/main-layout.vue'),
    children: [
      {
        path: routes.other.assign('hello'),
        name: 'Other page',
        component: () => import('pages/other-page.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error-404.vue'),
  },
]

processRoutes(routingTree, Object.values(routes))
