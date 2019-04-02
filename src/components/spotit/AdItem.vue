<template lang="pug">
  .w25
    v-card
      v-img(v-if="getFeaturedImage" :src="getFeaturedImage.imageUrl")
      v-card-title
        .flex-col.align-center.w100
          h3 {{ ad.title }}
          v-chip.w100.justify-center
            span ${{ ad.price }}
      v-card-text
        span {{ ad.content }}
      v-card-text
        span {{ ad.createdAt | date }}
      v-card-actions
        .flex-col.align-center.w100
          v-btn(outline) Details
</template>

<script>

export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  },
  computed: {
    getFeaturedImage() {
      const adImages = this.ad.adImages
      if (adImages.length) return adImages[0]
      return null
    }
  }
}
</script>

