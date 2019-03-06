<template lang="pug">
  .w70.m10.p10
    .flex-row.justify-center
      div(v-if="!isLoggedIn")
        v-btn.fb(@click="emitLogin('fb')")
          v-icon(small color="white") fab fa-facebook-f
        v-btn.gg(@click="emitLogin('gg')")
          v-icon(small color="white") fab fa-google
        v-btn.tw(@click="emitLogin('tw')")
          v-icon(small color="white") fab fa-twitter
      div(v-else)
        span.p5(style="background-color:#ececec;" @click="emitLogout") Log out
    hr(style="border-top:0.8px solid white")
</template>


<script>
export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    emitLogin(provider) {
      this.$emit('login', provider)
    },
    emitLogout() {
      this.$emit('logout')
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.user
    }
  }
}
</script>
