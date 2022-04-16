<template>
  <a-button type="primary" @click="addRct">22</a-button>
  <a-button type="primary" @click="removeRct">33</a-button>
  <div id="container"></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Konva from "konva";

// let layer = new Konva.Layer();
let stage = <Konva.Stage>{};
let layer = <Konva.Layer>{};
let circle = <Konva.Circle>{};
const addRct = () => {
  layer.add(circle);
  //stage.add(layer);
};

const removeRct = () => {
  circle.remove();
};

// hook
onMounted(() => {
  // 画布
  stage = new Konva.Stage({
    container: "container",
    width: 200,
    height: 200,
  });
  // 笔
  layer = new Konva.Layer();
  // 圆形
  circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
  });
  //
  stage.add(layer);
});
let columns = [
  {
    title: "姓名2",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄1",
    dataIndex: "age",
    key: "age",
  },
];
defineExpose({ columns });
</script>
<style></style>
