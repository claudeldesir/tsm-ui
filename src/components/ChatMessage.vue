<template lang="pug">
  .m5.p15.br10.message-box(:class="{mine:isMine}")
    .flex-row.align-center.space-between(:class="{'flex-reverse':isMine}")
      .flex-col.space-between.w80(:class="{'align-end':isMine}")
        .flex-1
        .p10-ver(style="word-break:break-all;") {{ message.content }}
        div
          timeago(:datetime="message.createdAt" :autoUpdate="true")
      .flex-col(:class="{'align-end':!isMine,'align-start':isMine}")
        .p5-side.p5-bot {{ !isMine ? message.user.displayName : 'Me' }}
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
    },
    isMine() {
      if (!this.getCurrentUser) return false
      return this.getCurrentUser.uid === this.message.user.id
    }
  }
}
</script>

<style lang="scss" scoped>
  .message-box {
    background-color: #ececec;
    color: black;
    &.mine {
      background-color: #3578e5;
      color: white;
    }
  }
</style>

