<template lang="pug">
  .flex-col.align-center
    .p5
      h3 {{ station.title }}
    .p5
      span {{ station.desc }}
    .p5-ver.w100
      carousel(:perPage="1"
        @page-change="onPageChange"
        :navigateTo="getSelectedMediaIndex"
        paginationActiveColor="#fff"
        paginationColor="#555")
        slide(v-for="mediaItem in media" :key="mediaItem.id")
          MediaContainer(:mediaItem="mediaItem" :transitionCount="transitionCount")
    .p20
      button.btn.btn-outline-light.promoBtn(@click="$emit('map:goToPromos')")
        i.fas.fa-gift
        br
        span GET A FREE GIFT!
    span Share with your friends!
    .flex-row.p5
      social-sharing(url="https://google.com" media="https://google.com" title="this is title" description="this is desc" quote="this is quote" inline-template)
        .flex-row.center
          network(network="facebook")
            i.p10.fs30.fab.fa-facebook.pointer
          network(network="twitter")
            i.p10.fs30.fab.fa-twitter.pointer
          network(network="googleplus")
            i.p10.fs30.fab.fa-google-plus.pointer
          network(network="pinterest")
            i.p10.fs30.fab.fa-pinterest.pointer
          network(network="linkedin")
            i.p10.fs30.fab.fa-linkedin.pointer
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
      type: Number,
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
        if (mediaItem.id === this.selectedMedia) {
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
      const mediaId = mediaItem.id
      this.$emit('map:mediaChanged', mediaId)
    }
  },
  components: {
    MediaContainer
  }
}
</script>

