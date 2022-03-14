import { createApp } from 'vue'
import Chat  from "vue3-beautiful-chat";
import App from './App.vue'
import router from './router';
const app = createApp(App);
app.use(router);
app.use(Chat);
app.mount('#app');
