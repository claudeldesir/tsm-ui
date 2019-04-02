<template lang="pug">
  v-badge(overlap)
    div(slot="badge" v-if="promoImage.featured")
      v-icon(small color="white") fas fa-star
    .flex-col.align-center
      v-avatar(tile size="100")
        img(v-if="!slotted" :src="promoImage.imageUrl")
        slot(v-else)
      span {{ promoImage.desc }}
</template>

<script>

export default {
  props: {
    promoImage: {
      type: Object,
      required: true
    },
    slotted: Boolean
  }
}
</script>
