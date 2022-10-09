import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import copy from 'rollup-plugin-copy'
import legacy from '@vitejs/plugin-legacy'
import PkgConfig from 'vite-plugin-package-config'
import OptimizationPersist from 'vite-plugin-optimize-persist'
// https://vitejs.dev/config/
export default defineConfig({
  base: "/imws/",
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
      '@':'/src'
    }
  },
  build: {
    outDir:"dist/imws",
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/${fileName}/[name].[hash].js`;
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/imws/im': {
        target:'http://localhost:1996',
        ws:true
      },
      // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // },
      // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   }
      // }
    }
  },
  plugins: [
    vue({
      //exclude: ['src/v3.config'],
      reactivityTransform: true,
      template: {
        compilerOptions: {
          // ...
        }
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    Components({
      //extensions: ['src/components'],
      resolvers: [
        AntDesignVueResolver(),
      ],
      dts: 'src/components.d.ts'
    }),
    PkgConfig(),
    OptimizationPersist()
    // copy({
    //   targets: [
    //     { src: 'src/env.d.ts', dest: 'public' }, //执行拷贝
    //   ]
    // }),
  ]
})
