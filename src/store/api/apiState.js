// initial state
const state = {
  api : 'toto',
  logger : 'Up',
  lastDate : null,
  hosts  : 0,


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
    return state.hosts
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
  setNbHosts: (store, p) => {
    store.commit('SET_NB_HOSTS', p)
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
  SET_NB_HOSTS: (state, s) => {
    state.hosts = s
  },

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
