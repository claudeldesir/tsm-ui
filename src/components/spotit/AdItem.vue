<template lang="pug">
  .p10
    v-card
      ImageItem(v-if="ad.featuredImage" :image="ad.featuredImage" slotted)
        img.w100(:src="getImageUrl")
      v-card-title
        .flex-col.align-center.w100
          h3 {{ ad.title }}
          v-chip.w100.justify-center
            .fs14 ${{ ad.price }}
      v-card-text
        span(:title="ad.content" style="white-space:pre-wrap;") {{ getContent }}
      hr
      v-card-text
        .flex-row.space-around.align-center
          div Posted&nbsp;
            timeago(:datetime="ad.createdAt" :autoUpdate="true")
          .flex-col.align-center
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
    },
    getContent() {
      return helpers.reduceStringSize(this.ad.content, 50)
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

