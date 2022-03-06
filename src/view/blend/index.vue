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
import Base from "@/components/base/index.vue";
import { ref, toRef, toRefs } from "vue";

const base = ref<InstanceType<typeof Base>>();
const changep = (val: String) => {
  console.log(val);
  console.log(base.value.dataSource[0].name);
  base.value.dataSource[0].name = "12313";
};

const visible = ref<boolean>(false);
const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
</script>
