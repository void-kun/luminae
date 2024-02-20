import '@/style.css';

import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from '@/App.vue';

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true
});

app.mount('#app');
