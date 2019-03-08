import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat'
import Admin from '@/pages/admin/AdminHome'
import ManageSubscriptions from '@/pages/admin/ManageSubscriptions'
import ManageMedia from '@/pages/admin/ManageMedia'

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
  ],
  mode: 'history'
})