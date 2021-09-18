<template>
  <Base msg="测试" @changev="changep" />
</template>
<script setup lang="ts">
import Base from "@/components/base/index.vue";
const changep = (val: String) => {
  console.log(val);
};
</script>
