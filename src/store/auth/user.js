// initial state
const state = {
  connected : false,
}

// getters
const getters = {
  isConnected: (state) => {
    return state.connected
  },
}

// actions
const actions = {
  setConnected: (store, p) => {
    store.commit('SET_CONNECTED', p)
  }

}

// mutations
const mutations = {
  SET_CONNECTED: (state, s) => {
    state.connected = s
  },

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
