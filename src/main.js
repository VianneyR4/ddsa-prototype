// import './assets/main.css'
// import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import '@openclinical/proformajs-vue3-perform/dist/style.css'
import ProformajsVue from '@openclinical/proformajs-vue3-perform'

const app = createApp(App)

app.use(ProformajsVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
