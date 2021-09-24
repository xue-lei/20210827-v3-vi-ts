import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import copy from 'rollup-plugin-copy'
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
      '@':'/src'
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true
      },
    },
    rollupOptions: {
      output:{
          manualChunks(id) {
            if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
        }
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      //'/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
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
      template: {
        compilerOptions: {
          // ...
        }
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
     ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
    // copy({
    //   targets: [
    //     { src: 'src/env.d.ts', dest: 'public' }, //执行拷贝
    //   ]
    // }),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'ant-design-vue',
    //       esModule: true,
    //       resolveStyle: (name) => `ant-design-vue/es/${name}/style/css`,
    //     },
    //   ],
    // }),

  ]
})
