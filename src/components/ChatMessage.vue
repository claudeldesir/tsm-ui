<template lang="pug">
  .m5.p10.br10.message-box
    .flex-row.align-center.space-between
      .flex-col.align-between.w80
        .flex-1
        .p10-ver(style="word-break:break-all;") {{ message.content }}
        div
          timeago(:datetime="message.createdAt" :autoUpdate="true")
      .flex-col.align-end
        span {{ message.user.displayName }}
        img.br50(:src="getImageUrl")
</template>

<script>
export default {
  props: {
    message: Object,
    required: true
  },
  computed: {
    getImageUrl() {
      if (this.message.user.providerId === 'facebook.com') {
        return `https://graph.facebook.com/${this.message.user.uid}/picture`
      }
      return this.message.user.photoURL
    }
  }
}
</script>

<style lang="scss" scoped>
  .message-box {
    background-color: rgb(236, 236, 236);
  }
</style>

