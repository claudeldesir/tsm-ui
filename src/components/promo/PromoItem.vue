<template lang="pug">
  v-card
    .p15
      h3 {{ promo.title }}
      h4 {{ promo.desc }}
      br
      v-checkbox(v-model="promo.active" hide-details disabled label="Active")
      .flex-row.p5
        .p15(v-for="promoImage in promo.promoImages" :key="promoImage.id")
          ImageItem(:image="promoImage")
      v-btn(@click="deletePromo" color="error" outline) Delete
</template>

<script>
import ImageItem from '@/components/ImageItem'

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
    ImageItem
  }
}
</script>

