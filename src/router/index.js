import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat'
import Admin from '@/pages/admin/AdminHome'
import ManageSubscriptions from '@/pages/admin/ManageSubscriptions'

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
  ],
  mode: 'history'
})