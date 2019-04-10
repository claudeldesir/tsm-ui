<template lang="pug">
  v-badge.w100(overlap)
    div(slot="badge" v-if="image.featured")
      v-icon(small color="white") fas fa-star
    .flex-col.align-center
      v-avatar(v-if="!slotted" tile size="100")
        img(:src="getImageUrl")
      slot(v-else)
      span(v-if="image.desc") {{ image.desc }}
</template>

<script>
import helpers from '@/helpers'

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    slotted: Boolean
  },
  computed: {
    getImageUrl() {
      const imageUrl = this.image.imageUrl
      return helpers.getImageUrl(imageUrl)
    }
  }
}
</script>
