import Vue from 'vue'
import Vuex from 'vuex'
import apiState from "./api/apiState";
import socket from "./socket/websocket";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiState,
    socket
  }
})
