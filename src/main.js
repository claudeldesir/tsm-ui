import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueFire from 'vuefire'
import firebase from 'firebase/app'

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