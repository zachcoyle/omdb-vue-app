import './assets/main.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue)

app.mount('#app')
