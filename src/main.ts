import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/permission'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'

createApp(App).use(createPinia()).use(router).mount('#app')
