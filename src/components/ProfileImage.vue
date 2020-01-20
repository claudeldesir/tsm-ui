<template lang="pug">
  img.profile-img(:src="getImageUrl" @click="$emit('onClick')")
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

