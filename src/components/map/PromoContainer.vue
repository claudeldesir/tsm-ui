<template lang="pug">
  div
    v-slide-x-transition(leave-absolute hide-on-leave)
      .flex-col.align-center(v-if="loaded")
        .p5
          h3 {{ media.title }}
        .p5
          span {{ media.desc }}
        .p5-ver.w100
          carousel(:perPage="1"
            paginationActiveColor="#fff"
            paginationColor="#555")
            slide(v-for="promo in promos" :key="promo.id")
              .flex-col.h100
                div
                  img.w100(:src="getOneImageForPromo(promo).imageUrl")
                  .w100.h100.overlay
                .flex-1
                .flex-col.align-center.p5
                  h4 {{ promo.title }}
                  h5 {{ promo.desc }}
        .w100.p20.flex-row.space-around
          button.btn.btn-outline-light.promoBtn(@click="$emit('map:goToMedia')")
            i.fas.fa-arrow-left
            br
            span Back
          .flex-1
          button.btn.btn-outline-light.promoBtn
            i.fas.fa-gift
            br
            span GET A FREE GIFT!
      Loading.p10(v-else)
</template>

<script>
import Api from '@/services/api'

export default {
  props: {
    mediaId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.loaded = false
    return Api.getOneMedia(this.mediaId)
      .then((res) => {
        this.media = res.data
        setTimeout(() => { // small workaround
          this.loaded = true
        }, 100)
      })
  },
  data() {
    return {
      media: {},
      loaded: false
    }
  },
  computed: {
    promos() {
      return this.media.promos || []
    }
  },
  methods: {
    getOneImageForPromo(promo) {
      return promo.promoImages && promo.promoImages.length ? promo.promoImages[0] : null
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute !important;
  top: 0;
  z-index: 99999;
  background-color: rgba(0,0,0,0.2);
  left: auto;
}
</style>
