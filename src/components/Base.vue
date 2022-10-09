<template>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <h1>{{ msg }}</h1>
  <a-button type="primary" @click="click0">Primary Button</a-button>
  <a-button type="primary" @click="conuter++">count is: {{ conuter }}</a-button>
  <a-button type="primary" @click="isHas = true">display</a-button>
  <slot/>
  <a-table v-if="isHas" :dataSource="dataSource" :columns="columns" />
</template>
<script setup lang="ts">
import { request } from "@/api/request";
import { ref, toRefs, watchEffect, watch, reactive } from "vue";
import _ from 'lodash';
const props = defineProps<{
  msg: string;
}>();
const emits = defineEmits(["changev"]);
const { msg } = toRefs(props);
const conuter = ref(0);
const isHas = ref<Boolean>(false);
const click0 = async () => {
  click1()
  console.log("A:12131");
};
const click1 = async () => {
  emits("changev", "1231");
  let post = await request('https://httpbin.org/get');
  console.log(post);
};
let dataSource = reactive<dataSourcei[]>([
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

watchEffect(() => {
  console.log("listener0:" + conuter.value);
});
watch(conuter, (con, precon) => {
  console.log("listener0:" + con + "-" + precon);
});
watch(()=>_.cloneDeep(dataSource),(n, o)=>{
  console.log(n, o);
})
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
