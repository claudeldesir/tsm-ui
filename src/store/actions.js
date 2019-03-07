const CURRENT_USER_CHANGED = 'CURRENT_USER_CHANGED'

export default {
  currentUserChanged({ commit }, userObj) {
    commit(CURRENT_USER_CHANGED, userObj)
    return Promise.resolve()
  },
}