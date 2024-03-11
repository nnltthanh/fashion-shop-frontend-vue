import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './assets/slick-1.8.1/slick/slick.css';
import './assets/main.css';
import './assets/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cors from 'cors';

const app = createApp(App)
app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios)
app.use(router)
app.use(cors);
app.use(createPinia());
app.mount('#app')

console.log(import.meta.env.VITE_BACKEND_BASE_URL);