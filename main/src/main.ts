import Vue from 'vue';
import App from './App.vue';
import factorial from ".components/wasm/functions.wasm";

Vue.config.productionTip = true;
Vue.prototype.$myModule = null; // Will hold the module's instance

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
