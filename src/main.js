import Vue from 'vue'
import App from './App.vue'
//import {createApp} from 'vue'
import router from './routes/heyRoutes'
//import rrr from './rrr.vue'
//import test from './test.vue'
 Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 

//createApp(App).mount('#app');