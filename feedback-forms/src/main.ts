import { createApp } from 'vue';
import { createPinia } from 'pinia';  // Импорт Pinia
import App from './App.vue';

const app = createApp(App);

// Создание экземпляра Pinia и его подключение
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
