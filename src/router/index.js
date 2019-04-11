import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Chat from '@/pages/Chat'
import AdminHome from '@/pages/admin/AdminHome'
import ManageSubscriptions from '@/pages/admin/ManageSubscriptions'
import ManageMedia from '@/pages/admin/ManageMedia'
import MediaDetails from '@/pages/admin/MediaDetails'
import SpotIt from '@/pages/spotit/SpotIt'
import AdDetails from '@/pages/spotit/AdDetails'

import helpers from '@/helpers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminHome
    },
    {
      path: '/admin/subscriptions',
      name: 'subscriptions',
      component: ManageSubscriptions
    },
    {
      path: '/admin/media',
      name: 'media',
      component: ManageMedia
    },
    {
      path: '/admin/media/:mediaId',
      name: 'media-details',
      component: MediaDetails,
      props: (route) => {
        const mediaId = route.params.mediaId
        return helpers.getNumberId('mediaId', mediaId)
      }
    },
    {
      path: '/spotit/:adId',
      name: 'ad-details',
      component: AdDetails,
      props: (route) => {
        const adId = route.params.adId
        return helpers.getNumberId('adId', adId)
      }
    },
    {
      path: '/spotit',
      name: 'spotit',
      component: SpotIt
    },
  ],
  mode: 'history'
})