import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import { vuetify } from './vuetify';

import { createPinia } from 'pinia'
import { VueQueryPlugin } from "vue-query";

const pinia = createPinia()

createApp(App).use(router).use(i18n).use(vuetify).use(pinia).use(VueQueryPlugin).mount('#app');
