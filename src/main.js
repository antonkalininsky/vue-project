import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { store } from '@/vuex/vuex.js'

createApp(App).use(router).use(store).mount('#app')
