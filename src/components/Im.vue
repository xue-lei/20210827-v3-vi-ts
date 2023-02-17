<template>
  <Teleport to="body">
    <Chat @sendMsg="sendMsg" />
  </Teleport>
</template>
<script setup lang="ts">
import { useWebSocket } from '@vueuse/core';
import { watch } from 'vue';
import { message } from 'ant-design-vue';

function getUrl(): string {
  const loc = window.location;
  let newUri;
  if (loc.protocol === 'https:') {
    newUri = 'wss:';
  } else {
    newUri = 'ws:';
  }
  newUri += `//${loc.host}/imws/im`;
  return newUri;
}

const { status, send } = useWebSocket(getUrl(), {
  autoReconnect: {
    retries: 2,
    delay: 1000,
    onFailed() {
      message.error('连接失败!!');
    }
  },
  heartbeat: {
    message: 'ping',
    interval: 5000
  }
});

const sendMsg = (
  msg: messagei = {
    type: '12',
    author: 'xuelei',
    data: { text: '121', meta: '123' }
  }
) => {
  if (status.value !== 'OPEN') {
    message.error('连接失败!!');
    return;
  }
  console.log(JSON.stringify(msg));
  send(JSON.stringify(msg));
};

watch([status], () => {
  console.log(status.value);
});
</script>
