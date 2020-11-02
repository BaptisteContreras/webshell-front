// initial state
const state = {
  api : 'toto',
  logger : 'Up',
  lastDate : null,
  hosts  : 0,
  activeConnection : [
    {
      host : '127.0.0.1',
      port : 9000
    },
    {
      host : '192.168.1.25',
      port : 25
    },
    {
      host : '192.168.1.120',
      port : 907
    }
  ]


}

// getters
const getters = {
  getApiState: (state) => {
    return state.api
  },
  getLoggerState: (state) => {
    return state.logger
  },
  getLastDateState: (state) => {
    return state.lastDate
  },
  getNbHosts: (state) => {
    return state.activeConnection.length
  },
  getActivesConnexions: (state) => {
    return state.activeConnection
  },
}

// actions
const actions = {
  setApiState: (store, p) => {
    store.commit('SET_API_STATE', p)
  },
  setLoggerState: (store, p) => {
    store.commit('SET_LOGGER_STATE', p)
  },
  setLastDateState: (store, p) => {
    store.commit('SET_LAST_DATE_STATE', p)
  },
  setActivesConnexions: (store, p) => {
    store.commit('SET_ACTIVES_CONNEXION', p)
  },

}

// mutations
const mutations = {
  SET_API_STATE: (state, s) => {
    state.api = s
  },
  SET_LOGGER_STATE: (state, s) => {
    state.logger = s
  },
  SET_LAST_DATE_STATE: (state, s) => {
    state.lastDate = s
  },
  SET_ACTIVES_CONNEXION: (state, s) => {
    state.activeConnection = s
  },

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
