<template>
 <Teleport to = "body">
  <Chat @sendMsg1="sendMsg"/>
 </Teleport>
</template>
<script setup lang="ts">
import {useWebSocket} from "@vueuse/core";
import { watch } from "vue";
import { message } from 'ant-design-vue';
const { status, data, send } = useWebSocket(getUrl(), {
   autoReconnect:{
    retries: 2,
    delay: 1000,
    onFailed() {
      message.error('连接失败!')
    }
   },
   heartbeat: {
    message: 'ping',
    interval: 5000,
  }
});

const sendMsg = (
  msg: messagei = {
    type: "12",
    author: "xuelei",
    data: { text: "121", meta: "123" },
  }
) => {
  console.log(JSON.stringify(msg));
  send(JSON.stringify(msg));
};

watch([status],()=>{
  console.log(status.value);
})


function getUrl():string{
  let loc = window.location;
  let new_uri;
  if (loc.protocol === "https:") {
    new_uri = "wss:";
  } else {
    new_uri = "ws:";
  }
  return new_uri += "//" + loc.host + "/imws/im";
}
</script>
