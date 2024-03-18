import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/slick-1.8.1/slick/slick.css';
import './assets/main.css';
import './assets/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pinia from './store/store';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)


app.use(router)

app.use(pinia)

app.mount('#app')

console.log(import.meta.env.VITE_BACKEND_BASE_URL);
