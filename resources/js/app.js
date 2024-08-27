import './bootstrap.js';
import {  createApp  } from 'vue';
import App from './components/App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp();

app.component('app', App)

app.mount("#app");
