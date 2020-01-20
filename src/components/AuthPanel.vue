<template lang="pug">
  div(v-if="!isLoggedIn" style="width:min-content;")
    .flex-row.justify-end.align-center
      .p5-side
      v-btn.fb(@click="login('fb')" flat)
        v-icon(small color="white") fab fa-facebook-f
      v-btn.gg(@click="login('gg')" flat)
        v-icon(small color="white") fab fa-google
      v-btn.tw(@click="login('tw')" flat)
        v-icon(small color="white") fab fa-twitter
  .flex-row.justify-end.align-center(v-else)
    .flex-row.align-center.p5
      .p10-right.fs18(:style="{color: dark ? 'white' : 'black', 'line-height': 'normal'}") {{ getCurrentUser.displayName }}
      ProfileImage(:user="getCurrentUser" @onClick="gotoDashboard")
    div
      v-btn.logout(@click="logout" style="height:36px;" color="primary" flat)
        v-icon(small color="white") fas fa-sign-out-alt
</template>

<script>
import ProfileImage from '@/components/ProfileImage'
import auth from '@/services/auth'
import api from '@/services/api'

export default {
  props: {
    dark: Boolean
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    gotoDashboard() {
      this.$router.push({ name: 'dashboard' })
    },
    login(provider) {
      return auth.loginWithProvider(provider)
        .then(() => api.getUser())
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
