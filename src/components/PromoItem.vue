<template lang="pug">
  v-card
    .p10
      h1 {{ promo.title }}
      h3 {{ promo.desc }}
      br
      v-checkbox(v-model="promo.active" hide-details disabled label="Active")
      .flex-row.p5
        .p5(v-for="promoImage in promo.promoImages" :key="promoImage.id")
          v-badge(overlap)
            div(slot="badge" v-if="promoImage.featured")
              v-icon(small color="white") fas fa-star
            v-avatar(tile size="100")
              img(:src="getImageUrl(promoImage.imageUrl)")
</template>

<script>

const promoImageBase = 'https://thatsmontreal.ca:8000/static/promo' // pls temp

export default {
  props: {
    promo: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (imageName.includes('http')) return imageName
      return `${promoImageBase}/${imageName}`
    }
  }
}
</script>

