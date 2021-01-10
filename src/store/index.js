import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || null) // 当前用户登录状态  ttoken 数据
    // refresh_token 来解决token过期的问题
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止 刷新数据丢失， 数据持久化
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
