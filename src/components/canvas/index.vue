<template>
  <a-button type="primary" @click="addRct">22</a-button>
  <div id="container"></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Konva from "konva";

const addRct = () => {
  let stage = new Konva.Stage({
    container: "container",
    width: 200,
    height: 200,
  });
  let layer = new Konva.Layer();
  let circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
  });
  layer.add(circle);
  stage.add(layer);
};

// hook
onMounted(() => {
  addRct();
});
</script>
<style></style>
