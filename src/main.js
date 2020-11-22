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

console.log(process.env)

new Vue({
  vuetify,
  store,
  router,
  mounted(){
    let socket = io(process.env.SOCKET_HOST+":"+process.env.SOCKET_PORT);
    this.$store.dispatch("socket/setIO", socket)
    initEvent(socket, this)
    this.$vuetify.theme.dark = true
  },
  render: h => h(App)
}).$mount('#app')
