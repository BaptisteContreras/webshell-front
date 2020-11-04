// initial state
const state = {
  io: null,
  connected: false,
  sessions: [],
  currentSession: null,
  currentSessionMessageQueue: []
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
  getCurrentSessionMessageQueue: (state) => {
    return state.currentSessionMessageQueue;
  },
  getCurrentSession: (state) => {
    if (!state.currentSession) {
      return null;
    }
    let cSession = state.sessions.filter((el) => el.id === state.currentSession);
    return cSession.length === 1 ? cSession[0] : null;
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
  setCurrentSession: (store, p) => {
    store.commit('RESET_CURRENT_SESSION_MESSAGE_QUEUE');
    store.commit('SET_CURRENT_SESSION', p);
  },
  pushCurrentSessionMessage(store, message) {
    store.commit('PUSH_CURRENT_SESSION_MESSAGE', message);
  },

  incrementLastCommandId(store, session) {
    store.commit('INCREMENTE_LAST_COMMAND_ID', session);
  },
  ackCommand(store, res) {
    store.commit('ACK_COMMAND', res);
  },

  errorCommand(store, res) {
    store.commit('ERROR_COMMAND', res);
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
      if (session.id === s.id) {
        session.messages = [...session.messages, s.message];
      }

      return session;
    });
  },

  INCREMENTE_LAST_COMMAND_ID: (state, sessionId) => {
    state.sessions = state.sessions.map((session) => {
      if (session.id === sessionId) {
        session.lastCommandId++;
      }

      return session;
    });
  },

  RESET_CURRENT_SESSION_MESSAGE_QUEUE: (state) => {
    state.currentSessionMessageQueue = [];
  },

  SET_CURRENT_SESSION: (state, s) => {
    state.currentSession = s;
  },
  PUSH_CURRENT_SESSION_MESSAGE: (state, s) => {
    state.currentSessionMessageQueue = [...state.currentSessionMessageQueue, s];
  },
  ACK_COMMAND: (state, res) => {
    state.sessions = state.sessions.map((session) => {
      if (session.id === res.sessionId) {
        session.messages = session.messages.map(c => {
          if (c.commandId === res.commandId) {
            return {...c, statut: "OK"};
          }

          return c;
        });
      }

      return session;
    });
  },
  KO_COMMAND: (state, res) => {
    state.sessions = state.sessions.map((session) => {
      if (session.id === res.sessionId) {
        session.messages = session.messages.map(c => {
          if (c.id === res.commandId) {
            return {...c, statut: "ERROR"};
          }

          return c;
        });
      }

      return session;
    });
  }

};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
