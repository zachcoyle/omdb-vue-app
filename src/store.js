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
  }
})
