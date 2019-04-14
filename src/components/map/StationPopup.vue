<template lang="pug">
  .station-popup.w25(:style="getStyle")
    .flex-col.p10.white.br5.tiny-border
      div(v-if="loaded")
        .flex-row.justify-end.close-popup.pointer(@click="$emit('close')")
          i.fs20.p5.fas.fa-times
        .flex-col.p5.align-center
          .p5
            h3 {{ station.title }}
          .p5
            span {{ station.desc }}
          .p5-ver.w100
            carousel(:perPage="1")
              slide(v-for="mediaItem in media" :key="mediaItem.id")
                MediaContainer(:mediaItem="mediaItem")
          .p20
            button.btn.btn-outline-light.promoBtn
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
      Loading(v-else)
</template>

<script>
import { mapPoints } from '@/data/map-points'
import Api from '@/services/api'

import MediaContainer from '@/components/map/MediaContainer'

export default {
  props: {
    stationId: {
      type: Number,
      required: true
    }
  },
  created() {
    const stationId = 1 // temp
    this.loaded = false
    this.getStation(stationId)
      .then((station) => {
        this.station = station
        this.populateMedia(stationId)
          .then(() => {
            this.loaded = true
          })
      })
  },
  data() {
    return {
      station: {},
      media: [],
      loaded: false
    }
  },
  methods: {
    getStation(stationId) {
      return Api.getStation(stationId)
    },
    populateMedia(stationId) {
      return Api.getMediaForLocation(stationId)
        .then((media) => {
          this.media = media
        })
    }
  },
  computed: {
    getStyle() {
      const mapPoint = mapPoints.find(mapPointObj => mapPointObj.id === this.stationId)
      return {
        left: `${mapPoint.left}%`,
        top: `${mapPoint.top + 2}%`,
      }
    }
  },
  components: {
    MediaContainer
  }
}
</script>

<style lang="scss" scoped>
  .station-popup {
    position: absolute;
    background: rgba(0,0,0,0.6)
  }
</style>