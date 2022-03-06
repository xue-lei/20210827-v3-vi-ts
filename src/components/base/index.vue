<template>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
  </p>
  <AliwangwangOutlined :style="{ fontSize: '100px' }" />
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
  <a-button type="primary" @click="click0">Primary Button</a-button>
  <button type="button" @click="conuter++">count is: {{ conuter }}</button>
  <slot></slot>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>
<script setup lang="ts">
import { ref, toRefs, watchEffect, watch, reactive } from "vue";
import { AliwangwangOutlined } from "@ant-design/icons-vue";
const props = defineProps<{
  msg: string;
}>();
const emits = defineEmits(["changev"]);
const { msg } = toRefs(props);
const conuter = ref(0);
const click0 = async () => {
  click1().then((res) => {
    console.log(res);
  });
  console.log("A:12131");
};
const click1 = async () => {
  emits("changev", "1231");
  //dataSource[0].name = "薛磊";
  const post = await fetch(`https://www.baidu.com/api/post/1`)
    .then((r) => {
      console.log(r);
    })
    .catch((e) => {
      console.log(e);
    });
  console.log("CCCCCC");
  return "success";
};
watchEffect(() => {
  console.log("listener0:" + conuter.value);
});
watch(conuter, (con, precon) => {
  console.log("listener0:" + con + "-" + precon);
});

let dataSource: { key: string; name: string; age: number; address: string }[] =
  reactive([
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ]);

let columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
defineExpose({ columns, dataSource });
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
