import { createApp } from 'vue';
import Chat from 'vue3-beautiful-chat';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);
app.use(router);
app.use(Chat);
app.mount('#app');
