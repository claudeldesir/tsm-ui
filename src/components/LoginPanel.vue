<template lang="pug">
  .login-box.line-normal
    v-form.p40.flex-col.align-center(@submit="onLoginSubmit" ref="loginForm" lazy-validation)
      .logo.p10
        img(:src="logceDark" alt="TSM")
      .p10
      v-text-field.black--text.white-field.w100(v-model.trim="loginData.email" :rules="[(v) => !!v || 'Email is required']" placeholder="Email" required type="email" color="#fff" background-color="transparent" hide-details)
      br
      v-text-field.black--text.white-field.w100(v-model="loginData.password" :rules="[(v) => !!v || 'Password is required']" placeholder="Password" required type="password" color="#fff" background-color="transparent" hide-details)
      template(v-if="action === 'signup'")
        br
        .p15-top.w100
          v-text-field.black--text.white-field.w100(v-model="loginData.username" :rules="[(v) => !!v || 'Username is required']" placeholder="Username" required color="#fff" background-color="transparent" hide-details)
      br
      .p10-top
      v-btn.w100(type="submit" dark) {{ action === 'signup' ? 'Sign up' : 'Log in' }}
      br
      .flex-row.space-around
        span.fs18  ...or go with social media
        .p10-side
        .pointer(@click="loginWithSocial('fb')")
          v-icon(color="black") fab fa-facebook
        .p5
        .pointer(@click="loginWithSocial('gg')")
          v-icon(color="black") fab fa-google
        .p5
        .pointer(@click="loginWithSocial('tw')")
          v-icon(color="black") fab fa-twitter
    .p20-side.p20-bot
      .fs17.black--text.pointer(@click="toggleAction") {{ action === 'login' ? 'Sign up' : 'Log in' }} instead
</template>

<script>
import auth from '@/services/auth'
import api from '@/services/api'
import logceDark from '@/assets/home/images/antares/logce_dark.png'

export default {
  data: () => ({
    action: 'login',
    loginData: {
      username: '',
      email: '',
      password: ''
    },
    logceDark
  }),
  methods: {
    toggleAction(e) {
      e.preventDefault()
      const actionMap = {
        login: 'signup',
        signup: 'login'
      }
      const newAction = actionMap[this.action]
      this.action = newAction
    },
    onLoginSubmit(e) {
      e.preventDefault()
      const valid = this.$refs.loginForm.validate()
      if (!valid) return

      auth.loginWithEmail({ data: this.loginData, action: this.action })
        .then(this.onLoggedIn)
    },
    loginWithSocial(provider) {
      auth.loginWithProvider(provider)
        .then(this.onLoggedIn)
    },
    onLoggedIn() {
      api.getUser()
      this.$emit('loggedIn')
    }
  }
}
</script>

<style lang="scss">
.login-box {
  .white-field input,
  .white-field .v-label,
  .white-field input::placeholder {
    color: #000 !important;
    opacity: 1;
  }
}
</style>