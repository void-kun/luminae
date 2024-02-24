import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

// directive
import Tooltip from 'primevue/tooltip'

import 'primeicons/primeicons.css'
import '@/assets/style.css'

import router from '@/router'
import App from '@/App.vue'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: false,
})
app.use(router)

// apply directive
app.directive('tooltip', Tooltip)

app.mount('#app')
