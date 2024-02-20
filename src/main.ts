import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/slick-1.8.1/slick/slick.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App)

app.use(router)

app.mount('#app')

console.log(import.meta.env.VITE_BACKEND_BASE_URL);
