import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat'
import AdminHome from '@/pages/admin/AdminHome'
import ManageSubscriptions from '@/pages/admin/ManageSubscriptions'
import ManageMedia from '@/pages/admin/ManageMedia'
import MediaDetails from '@/pages/admin/MediaDetails'
import SpotIt from '@/pages/SpotIt'
import AdDetails from '@/pages/AdDetails'

Vue.use(Router)

const getNumberId = (key, value) => {
  const id = Number.parseInt(value, 10)
  if (Number.isNaN(id)) {
    return 0
  }
  const retObj = {}
  retObj[key] = id
  return retObj
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin'
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
        return getNumberId('mediaId', mediaId)
      }
    },
    {
      path: '/spotit/:adId',
      name: 'ad-details',
      component: AdDetails,
      props: (route) => {
        const adId = route.params.adId
        return getNumberId('adId', adId)
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