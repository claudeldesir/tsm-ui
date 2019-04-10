<template lang="pug">
  v-badge(overlap :class="{ w100: full }")
    div(slot="badge" v-if="image.featured")
      v-icon(small color="white") fas fa-star
    .flex-col.align-center(@click="$emit('selected')")
      img(v-if="original" :src="getImageUrl")
      v-avatar(v-else-if="!slotted" tile size="100")
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
    slotted: Boolean,
    full: {
      type: Boolean,
      default: true
    },
    original: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getImageUrl() {
      const imageUrl = this.image.imageUrl
      return helpers.getImageUrl(imageUrl)
    }
  }
}
</script>
