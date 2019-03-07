import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import VueSocketIO from 'vue-socket.io'
import VueTimeago from 'vue-timeago'

import authMixin from '@/mixins/auth'
import config from '@/config/appConfig.json'

import App from './App'
import router from './router'
import store from './store'
import './style/main.scss'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.use(VueFire)
Vue.mixin(authMixin)

require('firebase/auth') // needed?

firebase.initializeApp(config.firebaseConfig)

const socketIoConfig = config.socketIoConfig

Vue.use(new VueSocketIO({
  debug: false,
  connection: socketIoConfig.connectionUrl,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'en'
})

let app = null
firebase.auth().onAuthStateChanged((userObj) => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>',
    })
  }

  app.$store.dispatch('currentUserChanged', userObj)
})