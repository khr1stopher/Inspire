import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import Router from './routes'

createApp(App)
.use(Router)
.mount('#app')