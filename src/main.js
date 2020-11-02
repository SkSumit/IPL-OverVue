import Vue from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'
import 'ag-grid-enterprise';
Vue.use(VuePapaParse)
require('@/assets/main.scss');
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
