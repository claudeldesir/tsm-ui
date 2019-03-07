import firebase from 'firebase/app'
import 'firebase/auth'

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
      .then(res => Promise.resolve(res.user))
      .catch(err => Promise.reject(err.code))
  },
  logout() {
    if (firebase.auth().currentUser) {
      return firebase.auth().signOut()
    }
    return Promise.reject()
  },
  getCurrentUser() {
    return firebase.auth().currentUser
  },
}