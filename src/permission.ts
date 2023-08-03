import NProgress from 'nprogress'
import router from '~/router'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
