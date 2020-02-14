<template lang="pug">
  .auth-panel
    div(v-if="!isLoggedIn && !loading")
      Dialog(:visible="loginModalVisible" @close="loginModalVisible=false")
        LoginPanel(@loggedIn="loginModalVisible=false")
      .flex-row.justify-end.align-center(v-show="!loginModalVisible")
        span.white--text.fs17.pointer(@click="loginModalVisible=true") Log in
    .auth-menu.flex-row.justify-end.align-center.relative.nav-deps(v-else)
      v-menu(attach=".auth-menu" content-class="nav-deps-children")
        template(v-slot:activator="{ on }")
          .flex-row.align-center
            .fs18.p15-right(:style="{color: dark ? 'white' : 'black', 'line-height': 'normal'}") {{ getCurrentUser.displayName }}
            ProfileImage.pointer(:user="getCurrentUser" v-on="on" @onClick="on.click")
        v-list.transparent.line-normal.pointer
          .flex-row.space-between.align-center.p15-left.p10-right.p5-ver.white--text.fs18
            span Your gifts
            .p5-side
            v-icon(color="white") fas fa-fw fa-gifts
          .flex-row.space-between.align-center.p15-left.p10-right.p5-ver.white--text.fs18(@click="logout")
            span Log out
            .p5-side
            v-icon(color="white") fas fa-fw fa-sign-out-alt
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

<style lang="scss">
.auth-panel {
  .nav-deps-children {
    left: auto !important;
    max-width: 110%;
    width: 110%;
  }
}
</style>