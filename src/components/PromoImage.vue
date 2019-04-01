<template lang="pug">
  v-badge(overlap)
    div(slot="badge" v-if="promoImage.featured")
      v-icon(small color="white") fas fa-star
    .flex-col.align-center
      v-avatar(tile size="100")
        img(v-if="!slotted" :src="getImageUrl(promoImage.imageUrl)")
        slot(v-else)
      span {{ promoImage.desc }}
</template>

<script>
const promoImageBase = 'https://thatsmontreal.ca:8000/static/promo' // pls temp

export default {
  props: {
    promoImage: {
      type: Object,
      required: true
    },
    slotted: Boolean
  },
  methods: {
    getImageUrl(imageName) {
      if (imageName.includes('http')) return imageName
      return `${promoImageBase}/${imageName}`
    }
  }
}
</script>
