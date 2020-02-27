<template lang="pug">
  .flex-col.align-center
    .p5
      h3 {{ promo.title }}
    .p5
      DotPagination(:pages="promoImages.length" :activePage="selectedImageIndex" @selected="selectedImageIndex = $event")
    .p5
      span {{ promo.desc }}
    .p5-ver.w100
      carousel(:perPage="1"
        :navigateTo="selectedImageIndex"
        :paginationEnabled="false")
        slide(v-for="promoImage in promoImages" :key="promoImage.id")
          .relative
            ImageItem(:image="promoImage" original)
            .w100.h100.overlayz
    .p5-ver.w100(v-if="promoImages.length > 1")
      ImageItem.p5.pointer(v-for="(promoImage, idx) in promoImages" :image="promoImage" :full="false" :key="promoImage.id" @selected="selectedImageIndex = idx")
    .w100.p20.flex-row.space-around
      button.btn.btn-outline-light.promoBtn(@click="$emit('map:goToPromos')")
        i.fas.fa-arrow-left
        br
        span Back
      .flex-1
      .flex-col.align-center
        button.btn.btn-outline-light.promoBtn(
          @click="$emit('map:generateCode', promo.id)"
          :disabled="!getCurrentUser"
        )
          i.fas.fa-gift
          br
          span GET A FREE GIFT!
        i(v-if="!getCurrentUser") Please log in
</template>

<script>
import ImageItem from '@/components/ImageItem'
import DotPagination from '@/components/common/DotPagination'

export default {
  props: {
    promo: {
      type: Object,
      required: true
    }
  },
  created() {
    if (this.promoImages.length) this.selectedImageIndex = 0
  },
  data() {
    return {
      selectedImageIndex: null
    }
  },
  computed: {
    promoImages() {
      if (!this.promo || !this.promo.promoImages) return []
      return this.promo.promoImages.map(promoImage => ({ ...promoImage, featured: false })) // a bit hack
    }
  },
  components: {
    ImageItem,
    DotPagination
  }
}
</script>