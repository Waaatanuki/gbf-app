import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Unocss from 'unocss/vite'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

export default defineConfig({
  base: '/gbf-app/',
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    webUpdateNotice({
      logVersion: true,
      injectFileBase: '/gbf-app/',
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve('src', 'assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: ['src/composables', 'src/stores'],
      resolvers: [ElementPlusResolver()],
      vueTemplate: true,
      dts: path.resolve('types', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve('types', 'components.d.ts'),
    }),
    Unocss(),
  ],
  server: {
    host: '0.0.0.0',
    open: true,
    port: 6789,
  },
  resolve: {
    alias: {
      '~': path.resolve('./src'),
    },
  },
})
