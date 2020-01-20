<template lang="pug">
  .w100
    youtube(ref="youtubeEl" :player-vars="playerVars" :video-id="getVideoId()" :width="getWidth()" resize)
</template>

<script>
export default {
  props: {
    videoUrl: String,
    full: Boolean
  },
  created() {
    this.videoUrlVal = this.videoUrl
  },
  data() {
    return {
      resize: true,
      playerVars: {
        showinfo: 0,
        controls: 0,
        autohide: 1
      },
      videoUrlVal: ''
    }
  },
  methods: {
    getVideoId() {
      return this.$youtube.getIdFromUrl(this.videoUrlVal)
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
    },
    getWidth() {
      return this.full ? '100%' : 640
    }
  }
}
</script>

