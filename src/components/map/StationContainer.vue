<template lang="pug">
  .flex-col.align-center
    .p5
      h3 {{ station.title }}
    .p5
      span {{ station.desc }}
    .p5-ver.w100(v-if="media && media.length")
      carousel(:perPage="1"
        @page-change="onPageChange"
        :navigateTo="getSelectedMediaIndex"
        paginationActiveColor="#fff"
        paginationColor="#555")
        slide(v-for="mediaItem in media" :key="mediaItem.id")
          MediaContainer(:mediaItem="mediaItem" :transitionCount="transitionCount")
    .p20(v-if="media && media.length")
      button.btn.btn-outline-light.promoBtn(@click="$emit('map:goToPromos')" v-if="selectedMedia && selectedMedia.promos.length")
        i.fas.fa-gift
        br
        span GET A FREE GIFT!
    .p15-bot(v-else)
      .p5
      h4 Nothing to see here... yet
</template>

<script>
import MediaContainer from '@/components/map/MediaContainer'

export default {
  props: {
    station: {
      type: Object,
      required: true
    },
    media: {
      type: Array,
      required: true
    },
    selectedMedia: {
      type: Object,
      default: null
    }
  },
  created() {
    if (this.selectedMedia == null) this.onPageChange(0)
  },
  data() {
    return {
      transitionCount: 0 // okaay... *but Nikola did this!*
    }
  },
  computed: {
    getSelectedMediaIndex() {
      if (this.selectedMedia == null) return 0

      let index = 0
      // eslint-disable-next-line consistent-return
      this.media.forEach((mediaItem, idx) => {
        if (mediaItem.id === this.selectedMedia.id) {
          index = idx
          return true
        }
      })
      return index
    }
  },
  methods: {
    onPageChange(index) {
      this.transitionCount += 1
      const mediaItem = this.media[index || 0]
      this.$emit('map:mediaChanged', mediaItem)
    }
  },
  components: {
    MediaContainer
  }
}
</script>

