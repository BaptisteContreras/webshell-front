import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import globalMixins from "./mixins/globalMixins";
import router from './router';
import io from 'socket.io-client';
import initEvent from './mixins/socket/init'

Vue.config.productionTip = false

Vue.mixin(globalMixins);


new Vue({
  vuetify,
  store,
  router,
  mounted(){
    let socket = io("localhost:3000");
    this.$store.dispatch("socket/setIO", socket)
    initEvent(socket, this)
  },
  render: h => h(App)
}).$mount('#app')
