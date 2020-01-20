<template lang="pug">
  Page.p20(:loading="!loaded" isAdmin)
    h3 Media details
    br
    v-card
      .p10.flex-row
        .p10.flex-1
          v-text-field.fs20(v-model="media.title" filled label="Title")
          v-textarea(v-model="media.desc" filled label="Description")
          v-combobox(v-model="media.locId" :items="stations" item-text="title" item-value="id" :return-object="false" label="Station")
            template(slot="selection" slot-scope="data")
              span {{ data.item != null ? getStation(data.item).title : '' }}
          .p10
          v-checkbox(v-model="media.hasActiveSub" hide-details disabled label="Active subscription")
          .p10
          v-btn(@click="updateMedia" color="success" outline) Update
        .p10.flex-1
          v-text-field.fs18(v-model="media.url" filled label="Media URL")
          div(v-if="media.type === 0")
            YoutubeContainer(:videoUrl="media.url")
    br
    v-btn(@click="newPromo = !newPromo" color="primary" v-if="!newPromo" outline) Create new promo
    .frame.p10(v-if="newPromo")
      NewPromo(@promoSubmitted="promoSubmitted" @cancel="newPromo=false")
    br
    br
    h3 Promos
    br
    v-layout(row wrap)
      v-flex.p10(v-for="promo in media.promos" :key="promo.id")
        PromoItem(:promo="promo" @updatePromo="updatePromo" @deletePromo="deletePromo")
</template>

<script>
import Api from '@/services/api'
import PromoItem from '@/components/promo/PromoItem'
import NewPromo from '@/components/promo/NewPromo'
import YoutubeContainer from '@/components/YoutubeContainer'

export default {
  props: {
    mediaId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.getStations()
    this.getMedia()
  },
  data: () => ({
    media: {},
    stations: [],
    newPromo: false,
    loaded: false
  }),
  methods: {
    getMedia() {
      this.loaded = false
      return Api.getOneMedia(this.mediaId)
        .then((res) => {
          this.media = res.data
          this.loaded = true
        })
    },
    getStations() {
      return Api.getStations()
        .then((res) => {
          this.stations = res.data.sort((a, b) => {
            if (a.title > b.title) return 1
            if (a.title > b.title) return -1
            return 0
          })
        })
    },
    promoSubmitted(data) {
      const promo = { ...data.promo }
      const promoImages = data.promoImages
      return Api.postPromo(promo, this.mediaId)
        .then((res) => {
          const promoId = res.data.id
          return Api.postPromoImages(promoImages, promoId)
            .then(() => {
              this.newPromo = false
              this.getMedia() // smarter
            })
        })
    },
    getStation(stationId) { // not api-related, workaround
      const obj = this.stations.find(station => station.id === stationId)
      return obj || { title: '' } // another workaround
    },
    updatePromo(promo) {
      Api.updatePromo(promo)
        .then(() => {
          this.getMedia() // smarter
        })
    },
    deletePromo(promoId) {
      // TODO: Add dialog
      Api.deletePromo(promoId)
        .then(() => {
          this.getMedia() // smarter
        })
    },
    updateMedia() {
      const { id, title, desc, url, locId } = this.media
      const mediaObj = {
        id,
        title,
        desc,
        url,
        locId
      }
      Api.postMedia(mediaObj)
        .then(this.getMedia)
    }
  },
  components: {
    PromoItem,
    NewPromo,
    YoutubeContainer
  }
}
</script>