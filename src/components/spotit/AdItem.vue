<template lang="pug">
  .w20.p10
    v-card
      ImageItem(v-if="ad.featuredImage" :image="ad.featuredImage" slotted)
        img.w100(:src="getImageUrl")
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
          v-btn(@click="goToDetails" outline) Details
</template>

<script>
import ImageItem from '@/components/ImageItem'
import helpers from '@/helpers'

export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  },
  computed: {
    getImageUrl() {
      return helpers.getImageUrl(this.ad.featuredImage.imageUrl) // sure?
    }
  },
  methods: {
    goToDetails() {
      this.$emit('goToDetails', this.ad.id)
    }
  },
  components: {
    ImageItem
  }
}
</script>

