<template lang="pug">
  div
    youtube(ref="youtubeEl" :player-vars="playerVars" :resize="resize" :video-id="getVideoId()" @ready="fixSize")
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    videoUrl: String
  },
  data() {
    return {
      resize: true,
      playerVars: {
        showinfo: 0,
        controls: 0,
        autohide: 1
      },
    }
  },
  methods: {
    fixSize() {
      this.resize = false
      Vue.nextTick(() => {
        this.resize = true
      })
    },
    getVideoId() {
      return this.$youtube.getIdFromUrl(this.videoUrl)
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

