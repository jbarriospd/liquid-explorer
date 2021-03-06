import Vue from 'vue'
import App from './App.vue'
import "./main.css";
import "./minimal.css";

//import {i18n} from './i18n'

import 'vue-select/dist/vue-select.css';
import vSelect from "vue-select";

Vue.config.productionTip = false

Vue.component('v-select', vSelect)


new Vue({
 // i18n,
  render: h => h(App),
}).$mount('#app')
