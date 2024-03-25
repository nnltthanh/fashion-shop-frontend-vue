import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './assets/slick-1.8.1/slick/slick.css';
import './assets/main.css';
import './assets/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import pinia from './store/store';

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cors from 'cors';
import { provideCartService } from './services/cart.service';

const app = createApp(App);

// Provide VueAxios and axios
app.use(VueAxios, axios);

// Use router and cors
app.use(router);
app.use(cors);

// Create and use Pinia store
const pinia = createPinia();
app.use(pinia);


// Provide cartService
app.provide('cartService', provideCartService());

// Mount the app
app.mount('#app');
