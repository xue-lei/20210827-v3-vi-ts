<template>
  <a-button type="primary" @click="send()">send</a-button>
  <Im @sendMsg="send" />
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "@vue/runtime-core";
let socket = <WebSocket>{};
onMounted(() => {
  //createWebsocket();
});
onBeforeUnmount(() => {});
let createWebsocket = () => {
  let loc = window.location;
  let new_uri;
  if (loc.protocol === "https:") {
    new_uri = "wss:";
  } else {
    new_uri = "ws:";
  }
  socket = new WebSocket((new_uri += "//" + loc.host + "/imws/im"));
  socket.onopen = sockOpen;
  socket.onerror = sockError;
  socket.onmessage = message;
  // setTimeout(() => {
  //   socket.close();
  // }, 1000 * 3);
};
let sockError = (event: Event) => {
  console.log(event);
};
let sockOpen = (event: Event) => {
  console.log(event);
};
let message = (msg: MessageEvent<any>) => {
  console.log(msg);
};
const send = (msg: any = "123") => {
  console.log(msg);
  socket.send(JSON.stringify(msg));
};
</script>
