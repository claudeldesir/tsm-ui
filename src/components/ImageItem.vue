<template lang="pug">
  v-badge(overlap)
    div(slot="badge" v-if="image.featured")
      v-icon(small color="white") fas fa-star
    .flex-col.align-center
      v-avatar(tile size="100")
        img(v-if="!slotted" :src="image.imageUrl")
        slot(v-else)
      span {{ image.desc }}
</template>

<script>

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    slotted: Boolean
  }
}
</script>
