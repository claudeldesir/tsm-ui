<template lang="pug">
  div(:style="getStyle" ref="stationPopup" :class="{'station-popup': true, 'full-screen': fullscreen}")
    .flex-col.white--text.br5.fat-outline(:style="{'height': fullscreen ? '92vh' : 'inherit' + 'px'}")
      .absolute.abs-right.flex-row.p10.justify-end.close-popup.pointer(@click="$emit('close')")
        i.fs20.p10.fas.fa-times
      div(v-if="loaded")
        .p5
        v-slide-x-transition(leave-absolute hide-on-leave)
          StationContainer(v-if="step === 0"
            :station="station"
            :selectedMedia="selectedMedia"
            :media="media"
            @map:goToPromos="setStep(1)"
            @map:mediaChanged="selectedMedia = $event")
        PromoContainer(v-if="step === 1"
          :mediaId="selectedMedia.id"
          @map:goToMedia="setStep(0)"
          @map:goToPromoDetails="setStep(2)"
          @map:promoChanged="selectedPromo = $event")
        PromoDetails(v-if="step === 2"
          :promo="selectedPromo"
          @map:goToPromos="setStep(1)"
          @map:generateCode="generateCode")
        SharePanel(v-if="selectedMedia" :data="getShareData")
      Loading.p10(v-else)
</template>

<script>
import Vue from 'vue'
import Api from '@/services/api'

import StationContainer from '@/components/map/StationContainer'
import PromoContainer from '@/components/map/PromoContainer'
import PromoDetails from '@/components/map/PromoDetails'
import SharePanel from '@/components/SharePanel'

export default {
  props: {
    pointData: {
      type: Object,
      required: true
    },
    fullscreen: Boolean
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
  mounted() {
    this.correctPosition()
  },
  data() {
    return {
      station: {},
      media: [],
      selectedMedia: null,
      selectedPromo: null,
      loaded: false,
      step: -1,
      correctionX: 0
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
    generateCode(promoId) {
      if (this.getCurrentUser) {
        Api.reqPromoCode(promoId)
          .then(() => {
            this.$notify({
              group: 'basic',
              type: 'basic',
              title: 'Success',
              text: 'Code generated! Please check your email'
            })
          })
      }
    },
    // aux
    setStep(step) {
      this.step = step
    },
    correctPosition() {
      const el = this.$refs.stationPopup
      if (!el) return
      const sizeData = el.getBoundingClientRect()

      let tipX = 0
      if ((sizeData.x + sizeData.width) > window.innerWidth) {
        tipX = ((((sizeData.x + sizeData.width) - window.innerWidth) / window.innerWidth) * 100) + 11
      }
      this.correctionX = tipX
    }
  },
  computed: {
    getStyle() {
      const mapPoint = this.pointData
      return {
        left: !this.fullscreen ? `${mapPoint.left - this.correctionX}%` : '1%',
        top: !this.fullscreen ? `${mapPoint.top + 2}%` : '7%',
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
    PromoDetails,
    SharePanel
  }
}
</script>

<style lang="scss">
  .station-popup {
    z-index: 999;
    position: absolute;
    background:black;
    width: 30%;
    min-width: 600px;

    .full-screen {
      position: fixed !important;
      width: 98% !important;
    }
  }
</style>