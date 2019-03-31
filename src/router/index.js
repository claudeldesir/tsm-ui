import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat'
import Admin from '@/pages/admin/AdminHome'
import ManageSubscriptions from '@/pages/admin/ManageSubscriptions'
import ManageMedia from '@/pages/admin/ManageMedia'
import MediaDetails from '@/pages/admin/MediaDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
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
        const mediaId = Number.parseInt(route.params.mediaId, 10)
        if (Number.isNaN(mediaId)) {
          return 0
        }
        return { mediaId }
      }
    },
  ],
  mode: 'history'
})