import { RouteRecordRaw } from 'vue-router'
import { routerService } from 'src/services/router-service'

export type RouterPath = string[]

export const HomePagePath: RouterPath = []
export const OtherPagePath: RouterPath = ['other', 'hello']

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      {
        path: '',
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
        path: OtherPagePath[1],
        name: 'Other page',
        component: () => import('pages/other-page.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error-not-found.vue'),
  },
]

export default routes

export function getPathTo (path: RouterPath) {
  let fullPath = '/'
  if (path.length > 0) fullPath += path.join('/')
  return fullPath
}

export function routeTo (path: RouterPath) {
  return routerService.router.push(getPathTo(path))
}
