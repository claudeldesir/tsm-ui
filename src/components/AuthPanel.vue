<template lang="pug">
  div(v-if="!isLoggedIn && !loading")
    Dialog(:visible="loginModalVisible" @close="loginModalVisible=false")
      LoginPanel
    .flex-row.justify-end.align-center(v-if="!loginModalVisible")
      span.white--text.fs17.pointer(@click="loginModalVisible=true") Log in
  .flex-row.justify-end.align-center(v-else)
    .flex-row.align-center.p5
      .p10-right.fs18(:style="{color: dark ? 'white' : 'black', 'line-height': 'normal'}") {{ getCurrentUser.displayName }}
      ProfileImage(:user="getCurrentUser" @onClick="gotoDashboard")
    div
      v-btn.theme-primary-bg.logout(@click="logout" style="height:36px;" flat)
        v-icon(small color="black") fas fa-sign-out-alt
</template>

<script>
import Dialog from '@/components/common/Dialog'
import LoginPanel from '@/components/LoginPanel'
import ProfileImage from '@/components/ProfileImage'

import auth from '@/services/auth'
import api from '@/services/api'
import eventbus from '@/services/event-bus'

export default {
  props: {
    dark: Boolean
  },
  created() {
    eventbus.$on('pushLoginData', (payload) => {
      this.login('em', payload)
    })
  },
  destroyed() {
    eventbus.$off('pushLoginData')
  },
  data: () => ({
    loginModalVisible: false,
    loading: false
  }),
  methods: {
    gotoDashboard() {
      this.$router.push({ name: 'dashboard' })
    },
    loginWithEmail() {
      eventbus.$emit('toggleEmailLoginModal', true)
    },
    login(provider, payload) {
      this.loading = true
      auth.loginWithProvider(provider, payload)
        .then(() => {
          api.getUser()
          eventbus.$emit('toggleEmailLoginModal', false)
          this.loading = false
        })
    },
    logout() {
      return auth.logout()
    }
  },
  components: {
    Dialog,
    LoginPanel,
    ProfileImage
  }
}
</script>
