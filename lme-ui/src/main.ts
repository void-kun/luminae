import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import '@/assets/style.css'

import router from '@/router'
import App from '@/app.vue'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: false,
})
app.use(router)

app.mount('#app')
