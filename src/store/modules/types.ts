import { RouteLocationNormalized } from 'vue-router'

export interface AppState {
  device: string
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}

export interface TagView extends Partial<RouteLocationNormalized> {
  title?: string
}
