import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'animate.css';
import './assets/css/normalize.css'
import './assets/css/index.css'
import 'virtual:uno.css'
const pinia  = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
