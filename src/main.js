import Vue from 'vue';
import  VeeValidate from 'vee-validate';
//import {ValidationProvider} from 'vee-validate';

import  {store}  from './store';
import  {router}  from './_helpers';
import App from './App.vue';
import Api from './_backend/api';
import vuetify from './plugins/vuetify';

Vue.use(Api);
Vue.use(VeeValidate);

//Axios.defaults.baseURL = process.env.API_ENDPOINT;
//Vue.component('ValidationProvider',ValidationProvider);

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();


Vue.config.productionTip = false;


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')