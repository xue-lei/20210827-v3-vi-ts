<template>
  <Base msg="测试" @changev="changep" ref="base">
    <a-button type="primary" @click="showModal">Primary Button111</a-button>
  </Base>
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script setup lang="ts">
const base = $ref<InstanceType<any>>();
const changep = (val: String) => {
  console.log(val);
  console.log(base.dataSource[0].name);
  base.dataSource[0].name = "12313";
};

let visible = $ref<boolean>(false);
const showModal = () => {
  visible = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible = false;
};
</script>
