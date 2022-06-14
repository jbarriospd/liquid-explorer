import Vue from 'vue'
import App from './App.vue'

//import {i18n} from './i18n'


import "./main.css";
import 'vue-select/dist/vue-select.css';

import vSelect from "vue-select";
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin);


Vue.config.productionTip = false
Vue.component('v-select', vSelect)



new Vue({
 // i18n,
  render: h => h(App),
}).$mount('#app')
