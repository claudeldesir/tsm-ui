<template lang="pug">
  div
    YoutubeContainer(v-if="mediaItem.type === 0" ref="ytContainer" :videoUrl="mediaItem.url")
    .p5.tiny-border.text-center(v-else) Unsupported media type
    .w100.h100.overlay(@click="toggleVideo(false)")
</template>

<script>
import YoutubeContainer from '@/components/YoutubeContainer'

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
      isDrag: false
    }
  },
  methods: {
    toggleVideo(forceStop) {
      this.$refs.ytContainer.toggleVideo(forceStop)
    }
  },
  components: {
    YoutubeContainer
  }
}
</script>

<style lang="scss" scoped>
  .overlay {
    position: absolute !important;
    top: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,0.2);
    left: auto;
  }
</style>
