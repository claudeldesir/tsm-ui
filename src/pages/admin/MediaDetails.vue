<template lang="pug">
  Page(:loading="!loaded")
    h1 {{ media.title }}
    h3 {{ media.desc }}
    br
    v-card
      .p10
        span Type: {{ media.type | mediaType }}
        .p10
        v-checkbox(v-model="media.hasActiveSub" hide-details disabled label="Active subscription")
    br
    .frame.p10
      v-btn(@click="newPromo = !newPromo" color="primary") Create new promo
      NewPromo(v-if="newPromo" @promoSubmitted="promoSubmitted")
    br
    v-layout(row wrap)
      v-flex.p10(v-for="promo in media.promos" :key="promo.id")
        PromoItem(:promo="promo")
</template>

<script>
import Api from '@/services/api'
import PromoItem from '@/components/PromoItem'
import NewPromo from '@/components/NewPromo'

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
    promoSubmitted(promo) {
      const promoObj = { ...promo }
      promoObj.mediaId = this.mediaId
      console.log(promoObj)
    }
  },
  components: {
    PromoItem,
    NewPromo
  }
}
</script>

<style lang="scss" scoped>
  .frame {
    border: 2px solid #bbbbbb;
    border-radius: 5px;
  }
</style>
