// initial state
const state = {
  io: null,
  connected: false,
  sessions: [],
};

// getters
const getters = {
  isSocketConnected: (state) => {
    return state.connected;
  },
  getIO: (state) => {
    return state.io;
  },
  getNbSocketSession: (state) => {
    return state.sessions.length;
  },
  getSocketSessions: (state) => {
    return state.sessions;
  },
  getSocketSessionsPorts: (state) => {
    return state.sessions.map((el) => el.port);
  },


};

// actions
const actions = {
  setConnected: (store, p) => {
    store.commit('SET_CONNECTED', p);
  },
  setIO: (store, p) => {
    store.commit('SET_IO', p);
  },
  addSession: (store, p) => {
    store.commit('ADD_SESSION', p);
  },
  removeSession: (store, p) => {
    store.commit('REMOVE_SESSION', p);
  },
  addSessionMessage: (store, p) => {
    store.commit('ADD_SESSION_MESSAGE', p);
  },
  incrementeSessionLastCommandId(store, p){
    store.commit('INCREMENTE_LAST_ID', p)
  }

};

// mutations
const mutations = {
  SET_CONNECTED: (state, s) => {
    state.connected = s;
  },
  SET_IO: (state, s) => {
    state.io = s;
  },
  ADD_SESSION: (state, s) => {
    state.sessions = [...state.sessions, s];
  },
  REMOVE_SESSION: (state, s) => {
    state.sessions = state.sessions.filter((session) => session.id !== s.id);
  },
  ADD_SESSION_MESSAGE: (state, s) => {
    state.sessions = state.sessions.map((session) => {
      if (session.id === s.id){
        session.messages.push(s.message)
      }

      return session;
    });
  },
  INCREMENTE_LAST_ID: (state, s) => {
    state.sessions = state.sessions.map((session) => {
      if (session.id === s.id){
        session.lastCommandId++
      }

      return session;
    });
  },

};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
