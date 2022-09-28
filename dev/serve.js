import { createApp } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import Vue3ReactiveTelInput from '@/entry.esm';
import {
    createStore
} from 'vuex'
import phoneStore from './store'
const store = createStore({
    modules: {
        phoneStore,
    }
});
const app = createApp(Dev);
app.use(Vue3ReactiveTelInput);
app.use(store);

app.mount('#app');