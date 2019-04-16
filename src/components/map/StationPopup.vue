<template lang="pug">
  .station-popup.w25(:style="getStyle")
    .flex-col.white.br5.tiny-border
      div(v-if="loaded")
        .flex-row.p10.justify-end.close-popup.pointer(@click="$emit('close')")
          i.fs20.p5.fas.fa-times
        v-fade-transition
          StationContainer(v-if="step === 0"
            :station="station"
            :selectedMedia="selectedMedia"
            :media="media"
            @map:goToPromos="step = 1"
            @map:mediaChanged="selectedMedia = $event")
        v-fade-transition
          PromoContainer(v-if="step === 1"
            :mediaId="selectedMedia.id"
            @map:goToMedia="step = 0")
      Loading.p10(v-else)
</template>

<script>
import { mapPoints } from '@/data/map-points'
import Api from '@/services/api'

import StationContainer from '@/components/map/StationContainer'
import PromoContainer from '@/components/map/PromoContainer'

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
      selectedMedia: null,
      loaded: false,
      step: 0,
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
    StationContainer,
    PromoContainer
  }
}
</script>

<style lang="scss" scoped>
  .station-popup {
    position: absolute;
    background: rgba(0,0,0,0.6)
  }
</style>