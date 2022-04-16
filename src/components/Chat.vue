<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :deletionConfirmation="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['sendMsg']);
let participants = $ref([
  {
    id: "user1",
    name: "Matteo",
    imageUrl: "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4",
  },
  {
    id: "user2",
    name: "Support",
    imageUrl: "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4",
  },
]);
let messageList: messagei[] = $ref([
  {
    type: "text",
    author: `me`,
    id: 1,
    isEdited: true,
    data: { text: `Say yes!`, meta: "06-16-2019 12:43" },
  },
  {
    type: "text",
    author: `user1`,
    id: 2,
    isEdited: true,
    data: { text: `No.`, meta: "06-16-2019 12:43" },
  },
]);
let newMessagesCount = $ref(0);
let isChatOpen = $ref(false);
let titleImageUrl =
  "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png";
let showTypingIndicator = $ref("");
let alwaysScrollToBottom = $ref(false);
let messageStyling = $ref(true);
let onMessageWasSent = (message: messagei) => {
  console.log(message);
  emit("sendMsg", message);
  message.isEdited = true;
  message.id = 3;
  // called when the user sends a message
  messageList = [...messageList, message];
};
let closeChat = () => {
  // called when the user clicks on the botton to close the chat
  isChatOpen = false;
};
let openChat = () => {
  // called when the user clicks on the fab button to open the chat
  isChatOpen = true;
  newMessagesCount = 0;
};
let colors = {
  header: {
    bg: "#4e8cff",
    text: "#ffffff",
  },
  launcher: {
    bg: "#4e8cff",
  },
  messageList: {
    bg: "#ffffff",
  },
  sentMessage: {
    bg: "#4e8cff",
    text: "#ffffff",
  },
  receivedMessage: {
    bg: "#eaeaea",
    text: "#222222",
  },
  userInput: {
    bg: "#f4f7f9",
    text: "#565867",
  },
};
let handleOnType = () => {
  console.log("Emit typing event");
};
let editMessage = (message: messagei) => {
  console.log(message);
  const m: messagei | undefined = messageList.find((m) => m.id === message.id);
  if (m != undefined) {
    m.isEdited = true;
    m.data.text = message.data.text;
  }
};
</script>
