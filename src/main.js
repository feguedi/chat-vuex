import { createApp } from 'vue';
import App from './App.vue';
import { getAllMessages } from './store/actions';
import store from './store';

// import './style.css';
import './css/styles.css';

createApp(App)
  .use(store)
  .mount('#app');

getAllMessages(store);
