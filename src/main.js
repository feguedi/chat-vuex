import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { getAllMessages } from './api';

import './style.css';

createApp(App)
  .use(store)
  .mount('#app');

getAllMessages(store);
