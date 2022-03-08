import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'
import { createPinia } from 'pinia'   // <-------- import pinia


const app = createApp(App)

app.use(store)
app.use(createPinia())                // <-------- use it as plugin

app.mount('#app')
