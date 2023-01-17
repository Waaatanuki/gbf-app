import {
  ref,
  nextTick,
  onMounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
} from 'vue'

export default function useDynamicHeight() {
  const dynamicHeight = ref<number>(200)
  const sidebarElm = ref<Element>()
  const headerRef = ref<HTMLDivElement>()

  const tableResizeHandler = () => {
    const totalHeight = document.documentElement.offsetHeight
    const headHeight = 50
    const mainPadding = 15 * 2
    const height =
      totalHeight -
      headHeight -
      mainPadding -
      (headerRef.value ? headerRef.value.offsetHeight : 0)
    dynamicHeight.value = height > 300 ? height : 300
  }

  const sidebarResizeHandler = (e: TransitionEvent) => {
    if (e.propertyName === 'width') {
      tableResizeHandler()
    }
  }

  const initResizeEvent = () => {
    window.addEventListener('resize', tableResizeHandler, { passive: true })
  }

  const destroyResizeEvent = () => {
    window.removeEventListener('resize', tableResizeHandler)
  }

  const initSidebarResizeEvent = () => {
    headerRef.value = document.querySelector(
      '.app-container-header'
    ) as HTMLDivElement
    sidebarElm.value = document.getElementsByClassName('sidebar-container')[0]

    if (sidebarElm.value) {
      sidebarElm.value.addEventListener(
        'transitionend',
        sidebarResizeHandler as EventListener,
        { passive: true }
      )
    }
  }

  const destroySidebarResizeEvent = () => {
    if (sidebarElm.value) {
      sidebarElm.value.removeEventListener(
        'transitionend',
        sidebarResizeHandler as EventListener
      )
    }
  }

  onMounted(() => {
    initResizeEvent()
    initSidebarResizeEvent()
    nextTick(() => {
      tableResizeHandler()
    })
  })
  onBeforeUnmount(() => {
    destroyResizeEvent()
    destroySidebarResizeEvent()
  })
  onActivated(() => {
    initResizeEvent()
    initSidebarResizeEvent()
  })

  onDeactivated(() => {
    destroyResizeEvent()
    destroySidebarResizeEvent()
  })

  return { dynamicHeight }
}
