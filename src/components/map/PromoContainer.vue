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
            @page-change="onPageChange"
            paginationActiveColor="#fff"
            paginationColor="#555")
            slide(v-for="promo in promos" :key="promo.id")
              .flex-col.h100
                .relative
                  ImageItem(:image="getOneImageForPromo(promo)" original)
                  .w100.h100.overlayz
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
          button.btn.btn-outline-light.promoBtn(@click="$emit('map:goToPromoDetails')")
            i.fas.fa-gift
            br
            span GET A FREE GIFT!
      Loading.p10(v-else)
</template>

<script>
import Api from '@/services/api'
import ImageItem from '@/components/ImageItem'

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
          if (this.promos.length) this.onPageChange(0)
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
      if (promo.promoImages && promo.promoImages.length) {
        return {
          ...promo.promoImages[0],
          featured: false
        }
      }
      return null
    },
    onPageChange(index) {
      const promoItem = this.promos[index || 0]
      this.$emit('map:promoChanged', promoItem)
    }
  },
  components: {
    ImageItem
  }
}
</script>