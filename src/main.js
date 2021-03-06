import Vue from 'vue'
import Vuetify from 'vuetify'
import Notifications from 'vue-notification'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/auth'

import VueSocketIO from 'vue-socket.io'
import VueTimeago from 'vue-timeago'
import SocialSharing from 'vue-social-sharing'
import VueCarousel from 'vue-carousel'
import VueYoutube from 'vue-youtube'
import VueQRCodeComponent from 'vue-qr-generator'

import authMixin from '@/mixins/auth'
import config from '@/config/appConfig.json'
import { dateFilter, subscriberTypeFilter, subscriptionStatusFilter, lineTitleFilter, mediaTypeFilter, yesnoFilter } from '@/filters'

import Page from '@/components/common/Page'
import Loading from '@/components/common/Loading'

import fixPropPath from '@/helpers/prop-path'

import App from './App'
import router from './router'
import store from './store'
import './style/main.scss'

fixPropPath()

Vue.use(SocialSharing)
Vue.use(VueCarousel)
Vue.use(VueYoutube)
Vue.use(Vuetify, {
  iconfont: 'fa'
})
Vue.use(Notifications)
Vue.config.productionTip = false

Vue.use(VueFire)
Vue.mixin(authMixin)
Vue.component('qr-code', VueQRCodeComponent)

Vue.component('Page', Page)
Vue.component('Loading', Loading)

Vue.filter('date', dateFilter)
Vue.filter('subType', subscriberTypeFilter)
Vue.filter('subStatus', subscriptionStatusFilter)
Vue.filter('line', lineTitleFilter)
Vue.filter('mediaType', mediaTypeFilter)
Vue.filter('yesno', yesnoFilter)

firebase.initializeApp(config.firebaseConfig)

const socketIoConfig = config.socketIoConfig

const useSocket = false
if (useSocket) {
  Vue.use(new VueSocketIO({
    debug: false,
    connection: socketIoConfig.connectionUrl,
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  }))
}

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