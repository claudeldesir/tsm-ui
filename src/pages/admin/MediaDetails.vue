<template lang="pug">
  Page(:loading="!loaded")
    h1 {{ media.title }}
    br
    v-card
      .p10.flex-row
        .p10.flex-1
          h3 {{ media.desc }}
          .p10
          v-checkbox(v-model="media.hasActiveSub" hide-details disabled label="Active subscription")
        .p10.flex-1
          div(v-if="media.type === 0")
            YoutubeContainer(:videoUrl="media.url")
    br
    v-btn(@click="newPromo = !newPromo" color="primary" v-if="!newPromo") Create new promo
    .frame.p10(v-if="newPromo")
      NewPromo(@promoSubmitted="promoSubmitted" @cancel="newPromo=false")
    br
    v-layout(row wrap)
      v-flex.p10(v-for="promo in media.promos" :key="promo.id")
        PromoItem(:promo="promo" @deletePromo="deletePromo")
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
    this.getMedia()
  },
  data() {
    return {
      media: {},
      newPromo: false,
      loaded: false
    }
  },
  methods: {
    getMedia() {
      this.loaded = false
      return Api.getOneMedia(this.mediaId)
        .then((res) => {
          this.media = res.data
          this.loaded = true
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
    deletePromo(promoId) {
      // TODO: Add dialog
      Api.deletePromo(promoId)
        .then(() => {
          this.getMedia() // smarter
        })
    }
  },
  components: {
    PromoItem,
    NewPromo,
    YoutubeContainer
  }
}
</script>