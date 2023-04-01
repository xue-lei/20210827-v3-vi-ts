<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :title-image-url="titleImageUrl"
      :on-message-was-sent="onMessageWasSent"
      :message-list="messageList"
      :new-messages-count="newMessagesCount"
      :is-open="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :show-emoji="true"
      :show-file="true"
      :show-edition="true"
      :show-deletion="true"
      :deletion-confirmation="true"
      :show-typing-indicator="showTypingIndicator"
      :show-launcher="true"
      :show-close-button="true"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :disable-user-list-toggle="false"
      :message-styling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';

const emit = defineEmits(['sendMsg']);
const participants = reactive([
  {
    id: 'user1',
    name: 'Matteo',
    imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
  },
  {
    id: 'user2',
    name: 'Support',
    imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
  }
]);
const messageList: messagei[] = reactive([
  {
    type: 'text',
    author: `me`,
    id: 1,
    isEdited: true,
    data: { text: `Say yes!`, meta: '06-16-2019 12:43' }
  },
  {
    type: 'text',
    author: `user1`,
    id: 2,
    isEdited: true,
    data: { text: `No.`, meta: '06-16-2019 12:43' }
  }
]);
const newMessagesCount = ref(0);
const isChatOpen = ref(false);
const titleImageUrl =
  'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png';
const showTypingIndicator = ref('');
const alwaysScrollToBottom = ref(false);
const messageStyling = ref(true);
const onMessageWasSent = (message: messagei) => {
  console.log(message);
  emit('sendMsg', message);
  message.isEdited = true;
  message.id = 3;
  // called when the user sends a message
  messageList.push(message);
};
const closeChat = () => {
  // called when the user clicks on the botton to close the chat
  isChatOpen.value = false;
};
const openChat = () => {
  // called when the user clicks on the fab button to open the chat
  isChatOpen.value = true;
  newMessagesCount.value = 0;
};
const colors = {
  header: {
    bg: '#4e8cff',
    text: '#ffffff'
  },
  launcher: {
    bg: '#4e8cff'
  },
  messageList: {
    bg: '#ffffff'
  },
  sentMessage: {
    bg: '#4e8cff',
    text: '#ffffff'
  },
  receivedMessage: {
    bg: '#eaeaea',
    text: '#222222'
  },
  userInput: {
    bg: '#f4f7f9',
    text: '#565867'
  }
};
const handleOnType = () => {
  console.log('Emit typing event');
};
const editMessage = (message: messagei) => {
  console.log(message);
  const m: messagei | undefined = messageList.find((m) => m.id === message.id);
  if (m !== undefined) {
    m.isEdited = true;
    m.data.text = message.data.text;
  }
};
</script>
