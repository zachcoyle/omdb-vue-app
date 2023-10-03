import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      history: []
    }
  },
  mutations: {
    append(state, payload) {
      state.history.push(payload)
    }
  },
  getters: {
    current(state) {
      return state.history.at(-1)
    },
    history(state) {
      return state.history
    }
  }
})
