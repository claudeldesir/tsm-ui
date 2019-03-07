<template lang="pug">
  .m10.p10
    .flex-row.justify-center(v-if="!isLoggedIn")
      v-btn.fb(@click="login('fb')" flat)
        v-icon(small color="white") fab fa-facebook-f
      v-btn.gg(@click="login('gg')" flat)
        v-icon(small color="white") fab fa-google
      v-btn.tw(@click="login('tw')" flat)
        v-icon(small color="white") fab fa-twitter
    .flex-row.justify-end.align-center(v-else)
      span {{ getCurrentUser.displayName }}
      v-btn.logout(@click="logout" color="primary" flat)
        v-icon(small color="white") fas fa-sign-out-alt
    hr(style="border-top:0.8px solid white")
</template>

<script>
import auth from '@/services/auth'

export default {
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    login(provider) {
      return auth.loginWithProvider(provider)
    },
    logout() {
      return auth.logout()
    }
  }
}
</script>
