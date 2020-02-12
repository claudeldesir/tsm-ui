import firebase from 'firebase/app'
import 'firebase/auth'

const getCurrentUser = () => firebase.auth().currentUser
const logout = () => {
  if (getCurrentUser()) return firebase.auth().signOut()
  return Promise.reject()
}

const emailLoginFn = data => firebase.auth().signInWithEmailAndPassword(data.email, data.password)
const emailSignupFn = (data) => {
  const { email, password, username } = data
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => result.user)
    .then(user => user.updateProfile({ displayName: username }))
    .then(() => logout())
    .then(() => emailLoginFn(data))
}

export default {
  loginWithProvider(provider) {
    let providerObj = null
    switch (provider) {
      case 'fb':
        providerObj = new firebase.auth.FacebookAuthProvider()
        providerObj.addScope('email')
        break
      case 'gg':
        providerObj = new firebase.auth.GoogleAuthProvider()
        providerObj.addScope('https://www.googleapis.com/auth/contacts.readonly')
        break
      case 'tw':
        providerObj = new firebase.auth.TwitterAuthProvider()
        break
      default:
        providerObj = {}
    }

    return firebase.auth().signInWithPopup(providerObj)
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err.code))
  },
  loginWithEmail({ data, action }) {
    const emailDirectionFn = action === 'login' ? emailLoginFn : emailSignupFn
    const loginFn = emailDirectionFn(data)
    return loginFn
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err.code))
  },
  getUserToken() {
    const user = getCurrentUser()
    if (!user) return Promise.reject()
    return user.getIdToken()
  },
  getCurrentUser,
  logout
}