const CURRENT_USER_CHANGED = 'CURRENT_USER_CHANGED'

export default {
  [CURRENT_USER_CHANGED](state, userObj) {
    state.currentUser = userObj
  },
}