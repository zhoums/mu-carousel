import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import muCarousel from './lib/carousel/lib/index'
import taoCarousel from './lib/kk/index'
import cardCarousel from './lib/card/index0'
import vueToastPanel from './lib/test.js'

Vue.config.productionTip = false
Vue.use(muCarousel)
Vue.use(taoCarousel)
Vue.use(vueToastPanel)
Vue.use(cardCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
