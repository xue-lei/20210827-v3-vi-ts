<template>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:a多发发
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <a-button type="primary" @click="click0" >Primary Button</a-button>
  <button type="button" @click="conuter++">count is: {{ conuter }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script lang="ts">
import { ref, toRefs, defineComponent } from 'vue'
import Axios from 'axios'
export default defineComponent({
  props: {
    msg: String
  },
  setup(props){
    const { msg } = toRefs(props)
    const conuter = ref(0)
    const click0 = async() => {
      console.log(msg.value)
    }
    return {conuter, click0}
  }
})
</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
