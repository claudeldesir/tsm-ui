<template lang="pug">
  v-form.p10(ref="promoForm")
    v-text-field(v-model="promo.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title" solo)
    v-text-field(v-model="promo.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo)
    v-checkbox(v-model="promo.active" label="Active")
    v-btn.nom(@click="submitPromo" color="success") Submit
</template>

<script>
export default {
  data() {
    return {
      promo: {}
    }
  },
  methods: {
    submitPromo() {
      const promoValid = this.$refs.promoForm.validate()
      if (!promoValid) return

      const promo = this.promo
      this.$emit('promoSubmitted', promo)
    }
  }
}
</script>

