<template lang="pug">
  div(v-if="!isLoggedIn && !loading")
    Dialog(:visible="loginModalVisible" @close="loginModalVisible=false")
      LoginPanel(@loggedIn="loginModalVisible=false")
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

export default {
  props: {
    dark: Boolean
  },
  data: () => ({
    loginModalVisible: false,
    loading: false
  }),
  methods: {
    gotoDashboard() {
      this.$router.push({ name: 'dashboard' })
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
