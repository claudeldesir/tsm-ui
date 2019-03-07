export default {
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser
    },
    isLoggedIn() {
      return !!this.$store.getters.getCurrentUser
    }
  }
}