// initial state
const state = {
  activeConnection: [
    {
      host: '127.0.0.1',
      port: 9000
    },
    {
      host: '192.168.1.25',
      port: 25
    },
    {
      host: '192.168.1.120',
      port: 907
    }
  ]


};

// getters
const getters = {
  getNbHosts: (state) => {
    return state.activeConnection.length;
  },
  getActivesConnexions: (state) => {
    return state.activeConnection;
  },
};

// actions
const actions = {
  setActivesConnexions: (store, p) => {
    let payloadModified = p.split(';').map((el) => el.split('.')).filter((el) => el.length === 7).map((el) => {
      return {
        host : el[1],
        port : el[3].split(">")[0].trim()
      }
    })
    store.commit('SET_ACTIVES_CONNEXION', payloadModified);
  },

};

// mutations
const mutations = {
  SET_ACTIVES_CONNEXION: (state, s) => {
    state.activeConnection = s;
  },

};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
