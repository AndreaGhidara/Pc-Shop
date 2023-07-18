import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// Import Router
import { router } from './router'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App).use(router).mount('#app')
