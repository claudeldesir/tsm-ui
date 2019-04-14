<template lang="pug">
  div
    youtube(v-if="mediaItem.type === 0" :resize="resize" :video-id="getMediaSrc()" @ready="fixSize")
    .p5.tiny-border.text-center(v-else) Unsupported media type
</template>

<script>
import Vue from 'vue'
import url from 'url'

export default {
  props: {
    mediaItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      resize: true
    }
  },
  methods: {
    getMediaSrc() {
      const mediaUrl = this.mediaItem.url
      const type = this.mediaItem.type

      if (type === 0) {
        const urlParts = url.parse(mediaUrl, true)
        const query = urlParts.query
        return query.v
      }
      return mediaUrl
    },
    fixSize() {
      this.resize = false
      Vue.nextTick(() => {
        this.resize = true
      })
    }
  }
}
</script>
