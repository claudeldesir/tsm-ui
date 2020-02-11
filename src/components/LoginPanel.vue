<template lang="pug">
  .login-box
    v-form.p40.flex-col.align-center(@submit="onLoginSubmit" ref="loginForm" lazy-validation)
      .logo
        img(:src="logce" alt="Website Logo")
      .p10
      v-text-field.white--text.white-field.w100(v-model.trim="loginData.email" :rules="[(v) => !!v || 'Email is required']" placeholder="Email" required type="email" color="#fff" background-color="transparent" hide-details)
      br
      v-text-field.white--text.white-field.w100(v-model="loginData.password" :rules="[(v) => !!v || 'Password is required']" placeholder="Password" required type="password" color="#fff" background-color="transparent" hide-details)
      template(v-if="action === 'signup'")
        .p40-top.w100
          v-text-field.white--text.white-field.w100(v-model="loginData.username" :rules="[(v) => !!v || 'Username is required']" placeholder="Username" required color="#fff" background-color="transparent" hide-details)
      br
      v-btn.w100(type="submit") {{ action === 'signup' ? 'Sign up' : 'Log in' }}
      br
      .flex-row.space-around
        v-btn.fb(flat)
          v-icon(small color="white") fab fa-facebook-f
        v-btn.gg(flat)
          v-icon(small color="white") fab fa-google
        v-btn.tw(flat)
          v-icon(small color="white") fab fa-twitter
    .p20-side.p20-bot
      a.white--text(@click="toggleAction") {{ action === 'login' ? 'Sign up' : 'Log in' }} instead
</template>

<script>
import eventbus from '@/services/event-bus'
import logce from '@/assets/home/images/antares/logce.png'

export default {
  data: () => ({
    action: 'login',
    loginData: {
      username: '',
      email: '',
      password: ''
    },
    logce
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
      if (valid) eventbus.$emit('pushLoginData', { data: this.loginData, action: this.action })
    }
  }
}
</script>

<style lang="scss">
.login-box {
  line-height: 2rem;

  .white-field input::placeholder {
    color: #fff !important;
    opacity: 1;
  }
  .white-field input {
    color: #fff !important;
  }
  .white-field .v-label {
    color: #fff;
    opacity: 1;
  }
}
</style>