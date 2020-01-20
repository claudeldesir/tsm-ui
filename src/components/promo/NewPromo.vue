<template lang="pug">
  .flex-row.space-between.align-center.w100
    .flex-5.p10
      h2 Create new promo
      br
      v-form(ref="promoForm")
        v-text-field(v-model="promo.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title")
        v-textarea(v-model="promo.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description")
        v-checkbox(v-model="promo.active" label="Active")
        .flex-row
          v-btn.no-margin(@click="submitPromo" color="success" outline) Submit
          .p5-side
          v-btn.no-margin(@click="$emit('cancel')" color="error" outline) Cancel
    .flex-2
    .flex-3
      ImageUpload(@filesChanged="promoImagesChanged")
    .flex-2
</template>

<script>
import ImageUpload from '@/components/ImageUpload'

export default {
  data: () => ({
    promo: {
      active: true
    },
    promoImages: []
  }),
  methods: {
    submitPromo() {
      const promoValid = this.$refs.promoForm.validate()
      const hasImages = this.promoImages.length
      if (!promoValid || !hasImages) return

      let validImages = true
      this.promoImages.forEach((promoImage) => {
        const desc = promoImage.metadata.desc
        if (!desc) validImages = false
      })
      if (!validImages) return

      const promo = this.promo
      const promoImages = this.promoImages
      this.$emit('promoSubmitted', { promo, promoImages })
    },
    promoImagesChanged(imageArr) {
      this.promoImages = imageArr
    }
  },
  components: {
    ImageUpload
  }
}
</script>

