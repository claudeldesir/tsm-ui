<template lang="pug">
  div(v-if="!isLoggedIn && !loading" style="width:min-content;")
    .flex-row.justify-end.align-center(v-show="false")
      .p5-side
      v-btn.fb(@click="login('fb')" flat)
        v-icon(small color="white") fab fa-facebook-f
      v-btn.gg(@click="login('gg')" flat)
        v-icon(small color="white") fab fa-google
      v-btn.tw(@click="login('tw')" flat)
        v-icon(small color="white") fab fa-twitter
      v-btn.em(@click="loginWithEmail" flat)
        v-icon(small color="white") fas fa-envelope
  .flex-row.justify-end.align-center(v-else)
    .flex-row.align-center.p5
      .p10-right.fs18(:style="{color: dark ? 'white' : 'black', 'line-height': 'normal'}") {{ getCurrentUser.displayName }}
      ProfileImage(:user="getCurrentUser" @onClick="gotoDashboard")
    div
      v-btn.theme-bg.logout(@click="logout" style="height:36px;" flat)
        v-icon(small color="black") fas fa-sign-out-alt
</template>

<script>
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
    hovered: false,
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
    ProfileImage
  }
}
</script>
