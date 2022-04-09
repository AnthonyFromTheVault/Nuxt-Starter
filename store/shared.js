export const state = () => ({
  passwordProtect: {
    accessOne: {
      userAccess: false,
      accessCode: 'secret',
      errorMessage: ''
    }
  }
})

export const getters = {
  accessOneUserAccess: state => {
    return state.passwordProtect.accessOne.userAccess
  },
  accessOneAccessError: state => {
    return state.passwordProtect.accessOne.errorMessage
  }
}

export const mutations = {
  UPDATE_USER_ACCESS(state, payload) {
    state.passwordProtect.accessOne.userAccess = payload
  },
  UPDATE_USER_ACCESS_ERROR(state, payload) {
    state.passwordProtect.accessOne.errorMessage = payload
  },
  RESET_USER_ACCESS(state) {
    state.passwordProtect.accessOne.userAccess = false
    state.passwordProtect.accessOne.errorMessage = ''
  }
}

export const actions = {
  checkUserAccess({ state, commit }, payload) {
    if (payload === state.passwordProtect.accessOne.accessCode) {
      commit('UPDATE_USER_ACCESS_ERROR', '')
      commit('UPDATE_USER_ACCESS', true)
    } else {
      commit(
        'UPDATE_USER_ACCESS_ERROR',
        'Sorry, but this is not the correct password.'
      )
    }
  }
}
