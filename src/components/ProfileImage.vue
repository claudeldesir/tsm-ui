<template lang="pug">
  .d-flex(@click="$emit('onClick', $event)")
    img.profile-img(v-if="getImageUrl" :src="getImageUrl")
    v-btn.m5(v-else icon)
      v-icon(color="white") fas fa-user
</template>

<script>
export default {
  props: {
    user: Object,
    required: true
  },
  computed: {
    getImageUrl() {
      if (this.user.providerId === 'facebook.com') {
        return `https://graph.facebook.com/${this.user.uid}/picture`
      }
      return this.user.photoURL
    }
  }
}
</script>

