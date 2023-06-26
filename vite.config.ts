import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import Unocss from 'unocss/vite'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  base: '/gbf-app/',
  plugins: [
    vue(),
    webUpdateNotice({
      logVersion: true,
      injectFileBase: '/gbf-app/',
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dirs: [path.resolve(pathSrc, 'composables')],

      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      vueTemplate: true,
      dts: path.resolve('types', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver(),
      ],

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
      '@': path.resolve('./src'),
    },
  },
})
