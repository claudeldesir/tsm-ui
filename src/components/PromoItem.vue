<template lang="pug">
  v-card
    .p15
      h1 {{ promo.title }}
      h3 {{ promo.desc }}
      br
      v-checkbox(v-model="promo.active" hide-details disabled label="Active")
      .flex-row.p5
        .p15(v-for="promoImage in promo.promoImages" :key="promoImage.id")
          PromoImage(:promoImage="promoImage")
      v-btn(@click="deletePromo" color="error") Delete
</template>

<script>
import PromoImage from '@/components/PromoImage'

export default {
  props: {
    promo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletePromo() {
      this.$emit('deletePromo', this.promo.id)
    }
  },
  components: {
    PromoImage
  }
}
</script>

