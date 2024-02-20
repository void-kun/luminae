import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import '@/style.css';

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true
});
app.use(router);

app.mount('#app');
