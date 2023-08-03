import { acceptHMRUpdate, defineStore } from 'pinia'
import { localStorage } from '~/utils/storage'

export const useAppStore = defineStore('app', () => {
  const device = ref('desktop')
  const sidebar = ref({
    opened: localStorage.get('sidebarStatus')
      ? !!+localStorage.get('sidebarStatus')
      : true,
    withoutAnimation: false,
  })

  function toggleSidebar() {
    sidebar.value.opened = !sidebar.value.opened
    sidebar.value.withoutAnimation = false
    if (sidebar.value.opened)
      localStorage.set('sidebarStatus', 1)
    else
      localStorage.set('sidebarStatus', 0)
  }
  function closeSideBar(withoutAnimation: any) {
    localStorage.set('sidebarStatus', 0)
    sidebar.value.opened = false
    sidebar.value.withoutAnimation = withoutAnimation
  }
  function toggleDevice(deviceStr: string) {
    device.value = deviceStr
  }

  return {
    device,
    sidebar,
    toggleSidebar,
    closeSideBar,
    toggleDevice,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
