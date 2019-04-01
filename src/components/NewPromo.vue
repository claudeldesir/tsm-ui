<template lang="pug">
  .flex-row.space-between.w100
    .flex-5
      v-form.p10(ref="promoForm")
        v-text-field(v-model="promo.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title" solo)
        v-text-field(v-model="promo.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo)
        v-checkbox(v-model="promo.active" label="Active")
        .flex-row
          v-btn.no-margin(@click="submitPromo" color="success") Submit
          .p5-side
          v-btn.no-margin(@click="$emit('cancel')" color="error") Cancel
    .flex-2
    .flex-3
      ImageUpload(@filesChanged="promoImagesChanged")
    .flex-2
</template>

<script>
import ImageUpload from '@/components/ImageUpload'

export default {
  data() {
    return {
      promo: {},
      promoImages: []
    }
  },
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

