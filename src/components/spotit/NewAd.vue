<template lang="pug">
  .flex-row.space-between.w100
    .flex-5.p10
      h2 Create new ad
      br
      v-form(ref="adForm")
        .flex-row
          .flex-1
            v-text-field(v-model="ad.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title")
            v-textarea(v-model="ad.content" :rules="[(v) => !!v || 'Content is required']" required placeholder="Content")
            v-slider(v-model="ad.price" :label="'$'+ad.price" min="10" max="990" step="10" inverse-label)
          .p10-side
          .flex-1
            v-text-field(v-model="ad.contactName" :rules="[(v) => !!v || 'Contact name is required']" required placeholder="Contact name")
            v-text-field(v-model="ad.address" :rules="[(v) => !!v || 'Address is required']" required placeholder="Address")
            v-text-field(v-model="ad.city" :rules="[(v) => !!v || 'City is required']" required placeholder="City")
            v-text-field(v-model="ad.postal" :rules="[(v) => !!v || 'Postal is required']" required placeholder="Postal")
            v-text-field(v-model="ad.phone" :rules="[(v) => !!v || 'Phone is required']" required placeholder="Phone")
            v-checkbox(v-model="ad.contactByEmail" label="Contact by email")
            v-checkbox(v-model="ad.contactByPhone" label="Contact by phone")
        .flex-row
          v-btn.no-margin(@click="submitAd" color="success") Submit
          .p5-side
          v-btn.no-margin(@click="$emit('cancel')" color="error") Cancel
    .flex-2
    .flex-3
      ImageUpload(@filesChanged="adImagesChanged" :descRequired="false")
    .flex-2
</template>

<script>
import ImageUpload from '@/components/ImageUpload'

export default {
  data() {
    return {
      ad: {
        price: 50,
        contactByEmail: false,
        contactByPhone: false
      },
      adImages: []
    }
  },
  methods: {
    submitAd() {
      const adValid = this.$refs.adForm.validate()
      const hasImages = this.adImages.length
      if (!adValid || !hasImages) return

      const ad = this.ad
      const adImages = this.adImages
      this.$emit('adSubmitted', { ad, adImages })
    },
    adImagesChanged(imageArr) {
      this.adImages = imageArr
    }
  },
  components: {
    ImageUpload
  }
}
</script>

