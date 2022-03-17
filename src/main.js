import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios({
  url:'http://152.136.185.210:7878/api/hy66/recommend',
}).then(res => {
  console.log(res)
}).catch(err=>{
  console.log(err);
})
