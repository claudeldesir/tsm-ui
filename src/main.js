import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/auth'

import VueSocketIO from 'vue-socket.io'
import VueTimeago from 'vue-timeago'
import SocialSharing from 'vue-social-sharing'

import authMixin from '@/mixins/auth'
import config from '@/config/appConfig.json'
import { dateFilter, subscriberTypeFilter, subscriptionStatusFilter, lineTitleFilter, mediaTypeFilter, yesnoFilter } from '@/filters'
import Page from '@/components/Page'

import App from './App'
import router from './router'
import store from './store'
import './style/main.scss'


Vue.use(SocialSharing)
Vue.use(Vuetify, {
  iconfont: 'fa'
})
Vue.config.productionTip = false

Vue.use(VueFire)
Vue.mixin(authMixin)
Vue.component('Page', Page)
Vue.filter('date', dateFilter)
Vue.filter('subType', subscriberTypeFilter)
Vue.filter('subStatus', subscriptionStatusFilter)
Vue.filter('line', lineTitleFilter)
Vue.filter('mediaType', mediaTypeFilter)
Vue.filter('yesno', yesnoFilter)

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