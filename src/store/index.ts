import useAppStore from './modules/app'

const useStore = () => ({
  app: useAppStore(),
})

export default useStore
