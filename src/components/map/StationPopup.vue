<template lang="pug">
  .station-popup.w25(:style="getStyle")
    .flex-col.white.br5.tiny-border
      .flex-row.p10.justify-end.close-popup.pointer(@click="$emit('close')")
        i.fs20.p5.fas.fa-times
      div(v-if="loaded")
        v-slide-x-transition(leave-absolute hide-on-leave)
          StationContainer(v-if="step === 0"
            :station="station"
            :selectedMedia="selectedMedia"
            :media="media"
            @map:goToPromos="setStep(1)"
            @map:mediaChanged="selectedMedia = $event")
        PromoContainer(v-if="step === 1"
          :mediaId="selectedMedia.id"
          @map:goToMedia="setStep(0)")
        SharePanel(v-if="selectedMedia" :data="getShareData")
      Loading.p10(v-else)
</template>

<script>
import Vue from 'vue'
import Api from '@/services/api'

import StationContainer from '@/components/map/StationContainer'
import PromoContainer from '@/components/map/PromoContainer'
import SharePanel from '@/components/SharePanel'

export default {
  props: {
    pointData: {
      type: Object,
      required: true
    }
  },
  created() {
    const stationId = this.pointData.stationId
    this.loaded = false
    this.getStation(stationId)
      .then((station) => {
        this.station = station
        this.populateMedia(stationId)
          .then(() => {
            this.loaded = true
            Vue.nextTick(() => {
              this.step = 0
            })
          })
      })
  },
  data() {
    return {
      station: {},
      media: [],
      selectedMedia: null,
      loaded: false,
      step: -1,
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
    },
    setStep(step) {
      this.step = step
    }
  },
  computed: {
    getStyle() {
      const mapPoint = this.pointData
      return {
        left: `${mapPoint.left}%`,
        top: `${mapPoint.top + 2}%`,
      }
    },
    getShareData() {
      const media = this.selectedMedia
      if (!media) return null
      return {
        url: media.url,
        title: media.title,
        desc: media.desc
      }
    }
  },
  components: {
    StationContainer,
    PromoContainer,
    SharePanel
  }
}
</script>

<style lang="scss" scoped>
  .station-popup {
    position: absolute;
    background: rgba(0,0,0,0.6)
  }
</style>