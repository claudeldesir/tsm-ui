<template lang="pug">
  div
    youtube(v-if="mediaItem.type === 0" ref="youtubeEl" :player-vars="playerVars" :resize="resize" :video-id="getMediaSrc()" @ready="fixSize")
    .p5.tiny-border.text-center(v-else) Unsupported media type
    .w100.h100.absolute(style="top:0;z-index:99999;" @click="toggleVideo(false)")
</template>

<script>
import Vue from 'vue'
import url from 'url'

export default {
  props: {
    mediaItem: {
      type: Object,
      required: true
    },
    transitionCount: Number // okaay...
  },
  watch: {
    transitionCount() {
      this.toggleVideo(true)
    }
  },
  data() {
    return {
      resize: true,
      playerVars: {
        showinfo: 0,
        controls: 0,
        autohide: 1
      },
      isDrag: false
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
    },
    toggleVideo(forceStop) {
      const youtubeEl = this.$refs.youtubeEl
      const player = youtubeEl.player

      const validStates = [-1, 2, 5]
      const stateP = player.getPlayerState()
      stateP.then((state) => {
        if (forceStop) {
          youtubeEl.player.stopVideo()
        } else if (state === 1) {
          youtubeEl.player.pauseVideo()
        } else if (validStates.includes(state)) {
          youtubeEl.player.playVideo()
        }
      })
    }
  }
}
</script>
