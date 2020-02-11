<template lang="pug">
  .flex-col.h100
    .relative
      YoutubeContainer(v-if="mediaItem.type === 0" ref="ytContainer" :videoUrl="mediaItem.url" full)
      .p5.tiny-border.text-center(v-else) Unsupported media type
      .w100.h100.overlayz(@click="toggleVideo(false)")
    .flex-1
    .flex-col.align-center.p5
      h4 {{ mediaItem.title }}
      h5.lato.self-start.p10.text-left.m10-left(style="border-left:4px solid white;") {{ mediaItem.desc }}
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
      setTimeout(() => {
        this.toggleVideo(true)
      }, 500)
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