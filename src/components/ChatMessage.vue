<template lang="pug">
  .m5.p10.br10.message-box
    .flex-row.align-center.space-between
      .flex-row.align-center.w80
        span(style="word-break:break-all;") {{ message.content }}
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
      return `https://graph.facebook.com/${this.message.user.uid}/picture`
    }
  }
}
</script>

<style lang="scss" scoped>
  .message-box {
    background-color: rgb(236, 236, 236);
  }
</style>

