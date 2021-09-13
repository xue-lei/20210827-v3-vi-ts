import {createRouter,createWebHashHistory} from 'vue-router';
import layout from '@/layout/index.vue';


const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes:[
      { 
        path: '/', 
        component: layout,
        redirect: '/HelloWorld',
        children: [
          {
            path: '/HelloWorld',
            component: () => import('@/components/HelloWorld.vue')
          },
          {
            path: '/option2',
            component: {template:"<div>11111111</div>"}
          }
        ] 
      },
      // { path: '/about', component: About },
    ] // `routes: routes` 的缩写
})

export default router;