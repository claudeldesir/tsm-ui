<template lang="pug">
  v-card
    .p15
      v-text-field.fs20(v-model="promoObj.title" filled label="Title")
      v-textarea(v-model="promoObj.desc" filled label="Description")
      br
      v-checkbox(v-model="promoObj.active" hide-details label="Active")
      .flex-row.p5
        .p15(v-for="promoImage in promo.promoImages" :key="promoImage.id")
          ImageItem(:image="promoImage")
      v-btn(@click="updatePromo" color="success" outline) Update
      v-btn(@click="deletePromo" color="error" outline) Delete
</template>

<script>
import ImageItem from '@/components/ImageItem'

export default {
  props: {
    promo: {
      type: Object,
      required: true
    }
  },
  created() {
    this.promoObj = { ...this.promo }
  },
  data: () => ({
    promoObj: {}
  }),
  methods: {
    updatePromo() {
      this.$emit('updatePromo', this.promoObj)
    },
    deletePromo() {
      this.$emit('deletePromo', this.promo.id)
    }
  },
  components: {
    ImageItem
  }
}
</script>

