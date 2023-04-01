<template>
  <a-button type="primary" @click="addRct">22</a-button>
  <a-button type="primary" @click="removeRct">33</a-button>
  <div id="container"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import Konva from 'konva';

// 画布
// let layer = new Konva.Layer();
let stage = <Konva.Stage>{};
// 笔
const layer = new Konva.Layer();
// 圆
const circle = new Konva.Circle({
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

const addRct = () => {
  circle.setPosition({
    x: stage.width() / 2,
    y: stage.height() / 2
  });
  layer.add(circle);
  // stage.add(layer);
};

const removeRct = () => {
  circle.remove();
};

// hook
onMounted(() => {
  // 画布
  stage = new Konva.Stage({
    container: 'container',
    width: 200,
    height: 200
  });
  stage.add(layer);
});
const columns = [
  {
    title: '姓名2',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄1',
    dataIndex: 'age',
    key: 'age'
  }
];
defineExpose({ columns });
</script>
<style></style>
